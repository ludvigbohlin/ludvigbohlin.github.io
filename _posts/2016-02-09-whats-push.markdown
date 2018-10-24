---
layout: post
title: "A closer look to HTTP/2 Push"
date: 2018-04-25 16:54:46
author: ShimmerCat's team
categories:
- blog
- HTTP/2 push
img: simple_browser_screenshot.jpg
thumb: simple_browser_screenshot_thumb.jpg
---


#### Summary 
<b> Implementing a web server around the concept of HTTP/2 Push is a good opportunity to understand how this technique works.
       We are pleased to share some of that knowledge with you.</b>

## Introduction

This article takes a look to HTTP/2 PUSH, beginning with a description of what is PUSH in the context of HTTP/2 (spoiler: is not the same than push notifications) and how does it work at a protocol devel. Then we examine some of the issues and concerns that an effective deployment needs to address.

## What's HTTP/2 PUSH
HTTP/2 PUSH allows a web server to send resources to a web browser before the browser gets to request them. It is, for the most part, a performance technique that can help some websites load twice or thrice as fast.

HTTP/2 PUSH *is not* a mechanism for the server to notify things to the browser. As we will see below, pushed contents are used by the browser when it may have otherwise produced a request to get the asset anyway. But if the browser would not request the resource, the pushed contents become wasted bandwidth.

### High level example
Let's think about a hypotetical website with three resources: `index.html`, `styles.css` and `script.js`.  Say that one user, through his browser, connects to the home page of this website and retrieves `index.html`. As soon as the browser gets `index.html`, it discovers that it will also need `styles.css` and `script.js`. Only then the browser will issue requests to get the other two files. Therefore, to assemble this webpage the browser will stack network round-trips as it gradually discovers the site's composition.

With HTTP/2 PUSH, the server can take the initiative by having some rules that trigger push at certain moments. For example, when the server receives a request to `index.html`, it can also push `styles.css` and `script.js` without waiting for the respective request from the browser. If done correctly, by the time the browser finishes parsing `index.html`, the transfer of  `styles.css` and `script.js` would have already started in "push mode" and the browser will simply sit back and relax while the files end their transfer.

### A glimpse into the cogs: how HTTP/2 PUSH works at a protocol level

It is easier to implement PUSH in a concrete website if one have an idea of how HTTP/2 PUSH works at a protocol level, even if when creating websites we may never have a need to see or create protocol data.

PUSH works over HTTP/2, which at its core is a frames protocol, meaning that information is exchanged in groups of bytes called frames. Additionally, frames are part of streams, and streams are identified by a number.
The *stream number* is present in each frame as a binary field. Streams  allow to match  requests and responses, e.g. the response to  request `GET /index.html` at stream 3 must also be at stream 3. There are a couple of rules with these numbers. First, there is no such a thing as a stream number zero, but some frames are given zero as a stream number to signal special things, like with "null" in some programming languages. Next, streams initiated by the browser must have odd numbers, and streams initiated by the server (when pushing resources) must have even numbers.

There are different types of frames, and each has a different function.  HTTP/2 has only a bunch of these types, and we don't need all of them to explain the basics. Here are the ones interesting for this description:

- HEADERS frame. As its name implies, this type of frame carries HTTP headers . When sent by the browser to the server, it signals that a request is being made. When sent by the server to the browser, it signals that a response to a previous request or push promise is being sent.
- PUSH\_PROMISE frame. This frame is sent by the server to the browser to start pushing a resource. It also contains HTTP headers. However, the kind of headers present in a PUSH\_PROMISE frame are headers that would normally be present in a *request* . This is different of the *response* headers that a server would normally send. The request URL, for example, is present in the PUSH\_PROMISE frame as the HTTP/2-specific `:path` pseudo-header, as it is the `:authority` pseudo-header to indicate a host.  Other headers that may be present a PUSH\_PROMISE and that some browsers use are cache headers, for example, `if-none-match`.
- DATA frames. These frames are sent in either direction to carry the actual of a resource or the contents that the browser POSTs or PUTs to the server.
- RST\_STREAM frames. These frames are handy in a variety of conditions, one of them is having the browser signal to the server that a pushed stream is not needed.

When the server wants to push a resource, it prepares a PUSH\_PROMISE frame, architecting it in the best way possible to seduce the browser into using the pushed contents. Then the server annexes the PUSH\_PROMISE frame to the response part of a normal, browser-initiated stream. However, the actual data for the pushed resource is sent in a fresh stream started by the server -- and thus with an even number.

The browser holds the pushed data in a temporary "quarantine" zone until it decides to use it. Later, every time the browser is going to make an actual request, it examines the contents of any received  push promises to see if it is similar enough to the request it wants to make.  However, the server needs not wait until that moment to start sending data for the promised resource. After the PUSH\_PROMISE frame has been sent on the browser-initiated stream, the server can send the would be response headers using a HEADERS frame in the new server-initiated stream, and later it can send the data of the resource using DATA frames. And at any point in time, the browser can interrupt any transfer by using RST\_STREAM.

Now let's see how this would work in our previous example. If the server is HTTP/2 PUSH ready, when it receives a request to `index.html` it can forecast that requests to `styles.css` and `script.js` are following close in tail. So it can issue push promises to get a bit ahead of events. Here is how things could look, in order of occurrence and making up the stream numbers:

1. Server receives HEADERS frame asking for  `index.html` in stream 3, and it can forecast the need for `styles.css` and `script.js`.
2. Server sends a PUSH\_PROMISE for `styles.css` and a PUSH\_PROMISE for `script.js`, again in stream 3. These frames are roughly equivalent to a browser's request.
3. Server sends a HEADERS frame in stream 3 for responding to the request for `index.html`.
4. Server sends DATA frame(s) with the contents of `index.html`, still in stream 3.
5. Server sends HEADERS frame for the response to `styles.css` in stream 4 -- notice the even stream number-- , and then for the response to `script.js` in stream 6.
6. Server sends DATA frames for the contents of `styles.css` and `script.js`, using their respective stream numbers.

<img class="full-width" src="{{ "/assets/img/blog/other/push_diagram.png" | prepend: site.baseurl }}" width="80%" height="auto">

The push promises are sent as early as possible so that the browser have them well ahead of any discoveries. Notice that some HTTP headers can reveal URLs that the browser needs to fetch, and an eager browser would start asking for the resources upon seeing those headers.  Therefore push promises are best sent before even the response headers of the stream where they are attached.

The sequence of steps detailed above brings some issues. We will address some of those issues a bit further down. But now let's reflect a little in what would be the performance gains made possible by PUSH.

### Does HTTP/2 PUSH makes web pages faster? What do I need to change?
Yes, notably so! Our study shows that most websites use the network very sparsely, specially in the first few seconds when the site is loading. This is due to the discovery process that we mentioned early. But using PUSH wisely, the server can saturate the receiving bandwidth of the browser, therefore accelerating web-page load notably. Gains are specially significant over transcontinental latencies.

The interesting question however is what good practices for performance should we stick to? A lot of them, it turns out. Indeed, this website is an experiment in not following most of them and enabling HTTP/2 PUSH, and it could be a lot faster. We will get back to this topic in a separate blog post, since this is a question many people have. But for now, and in short, HTTP/2 PUSH helps with the following:

- CSS and JS bundling is generally not needed (but image spriting is another thing).
- It is still a good idea to keep the HEAD section of your HTML as lean as possible regarding script and external style tags, because yes they still block the render. However, a good implementation of HTTP/2 PUSH will make sure that the browser have those resources as early as possible. So, if you don't feel like spending a weekend carefully dividing your resources in "over the fold" and "under the fold", you don't have to.

In a nutshell,  HTTP/2 PUSH provides much needed optimization head-room for website operators.

## Concerns

Unfortunately, all is not rose-colored when it comes to HTTP/2 PUSH. There are both perceived and real drawbacks when deploying this technique, and there are parts of the technology which just are not there. We will examine some of those here.

### Server load

Does HTTP/2 PUSH increases server load? That of course depends on the implementation, but rather than talking about a specific implementation let's resort to some first-principles reasoning.

The reasoning goes like this. If presenting a page to the user requires fetching `n` resources, then, bandwidth-wise, it doesn't matter if those resources are sent each as a response to an individual request or  batched together with HTTP/2 PUSH. There are some form differences, because instead of *receiving* the requests, the server *sends* watered down equivalents in the form of PUSH\_PROMISEs. And there are certain opportunities for "economies of scale". Namely, if HTTP/2 is running over TLS (the case for all browser implementations so far), many HEADERS and PUSH_PROMISE frames can share one TLS envelope, therefore saving a few bytes. There are also opportunities for waste, namely pushing assets that the browser won't request. But all in all, from the perspective of bandwidth usage, there is no reason for PUSH to be a significant burden.

There are other server-side critical resources: CPU, memory and disk access are examples. But there is no a-priori reason for PUSH to impose any significant overhead on them. True, an implementation may buffer everything in the server's memory before sending the data (we were doing that with ShimmerCat before version 1.2), but that would be a specific implementation issue, not a fundamental problem.

### What to PUSH, when, in what order
It is perfectly possible to push all of the assets served by your domain right at the beggining of the page fetch process. But it is easy to get it wrong. For example, CSS still needs to be delivered earlier than other assets, and the user may have already some resources.

With 80 being the number of requests that an average web-page needs this day, getting priorities right for all resources to PUSH is going to be a daunting task, and something to hold back developer teams. Therefore, an automatic solution to manage which assets to push and when is important. Current asset pipelines may help, but we don't think that they are up to the task. If nothing else, they lack the feedback that a web server gets by, well, serving web pages.  We think that HTTP/2 over a slightly more active web server can do much better while letting developers adopt and/or keep the workflows they are most comfortable with.

There is also the question of what do we value more as a user experience. For example, if there are three critical resources `index.html`, `styles.css` and `script.js`, we could push the data for   `styles.css` and `script.js`first, and only then send the data for `index.html`.  But since pushed resources are kept in a quarantine  area until a normal request happens, a browser may decide  to show  progress indications according to those normal  requests. In the example above, this would imply that the progress bar that the browser shows remains stalled until the last resource, `index.html`, finishes loading, and then  it quickly advances to completion. From the perspective of a user, it may be better to see gradual progress in a bar instead of sudden jumps. However, there may be other situations where seeing a fully loaded applications after a few seconds of a white screen is preferable.  What do you think?

### Interaction with the Browser's cache

The most tricky issue of all is how to get the server to not push resources that the client already have. In other words, how to correctly guess what's in a browser's cache. Here are a few ways around, from simpler to more convoluted:

**Option 1**: *Don't push to returning users*. That is, if the server detects that the user is a returning user, don't push any resources to her, and let her cached contents compensate for the "slowness" of a normal page fetch process.  This is a bit extreme but easy to implement and works well at saving server resources. We have implemented a variation of this in ShimmerCat.

**Option 2**:  *Always start pushing everything*.  Then be sure to set the cache headers properly, and hope that the browser will reset any streams for things it doesn't need.  The drawback is that there may be some payload in flight for pushed streams before the server receives the RST_STREAM frame. Also, the HTTP/2 spec is ambiguous regarding what to do when a resource which is considered fresh by the browser is pushed. While some people have interpreted  that the browser should reset pushed streams for resources it considers fresh, other have seen it as a mechanism for servers to discretionary refresh resources.

**Option 3**: *Do something really clever*.  Use cookies to monitor which resources a user has already obtained. It can be done more efficiently of what it sounds. For example,  [h2o](https://h2o.examp1e.net/)  uses a really smart way of compressing sets and storing them in cookies.

**Option 4**: *Wait for the standard*. A variation on  *Option 3*  that uses a special header may ultimately [become a standard](https://lists.w3.org/Archives/Public/ietf-http-wg/2016JanMar/0024.html). That effort may solve the issue pretty well. However we may need to wait a bit for the spec to settle and to have some browser implementations to play with.

It is hard to find the reference to that fact among the thousand of websites trying to educate users on how to clear their browser's cache, but Steve Sounders and Tenni Theurer, then at Yahoo!, [did a study in 2007](http://yuiblog.com/blog/2007/01/04/performance-research-part-2/) that put the number of times users were hitting Yahoo! with an empty cache between 20 and 60%. And that's for Yahoo!, a site built upon returning users. For more "casual" sites, the number of users coming with an empty cache is probably a lot higher. This kind of information may ultimately guide you on what's the best approach to follow.

## Conclusions
When we first looked to the HTTP/2 standard in the beginning of 2015,  we had a mixed reaction. Going through the weavings of  *can(s)* ,  *should(s)* and *must(s)* of the specification we learned that using HTTP/2 as if it were a better HTTP/1.1 was not too complicated. But some of the features of HTTP/2, namely PUSH, priorities and dependencies, were just in another bag. We are still figuring out how to use them effectively, but one thing is certain, the offer huge potential to make the web faster and funnier. That's why we are building ShimmerCat as our answer to this question: how do we make not only possible to use the new HTTP/2 features at an advantage, but also make them easy, practical and accessible to everybody?

As always, if there is anything you will like to know about, do not hesitate to ask!
