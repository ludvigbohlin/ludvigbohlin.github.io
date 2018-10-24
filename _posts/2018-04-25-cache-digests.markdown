---
layout: post
title: "Cache digests for HTTP/2 Push: lossy compression saves the day again"
date: 2018-04-25 16:54:46
author: ShimmerCat's team
categories:
- blog
- HTTP/2 push
- Cache Digests
img: serverpush.jpg
thumb: serverpush_thumb.jpg
---

#### Summary
<b>To use HTTP/2 Push effectively, servers need to know well what is not necessary to Push.
Cache digests provide the necessary information to make that possible.</b>


## Introduction

We often get the question of how expensive is to use HTTP/2 Push,
server-wise.
Answer: there is no reason for it to be more expensive than not using
it.
In fact, whenever we use it, it improves website speed *and* reduces
web server load.
The key  ingredient of this secret sauce is cache digests.
The technique was first implemented by Kazuho Oku in his
[H2O server](https://h2o.examp1e.net/),
and then published by him and Mark Nottingham as an  Internet draft.
We followed suite with our own implementation, and we like very much the results.

So, what is it?

HTTP/2 Push  allows websites to save loading time
by skipping network round-trips.
Because it reduces the effects of latency so well,
it may become a viable alternative to
CDNs for websites with moderate traffic.
But in order to save resources when doing
HTTP/2 Push,
a web server should know
which assets the browser already has in its cache.

Unfortunately, old good HTTP caching headers are not  well suited to this
particular scenario.

Our favorite solution to
this problem is cache digests, which is implemented by default in ShimmerCat.
We start by explaining how it works in general,
and then take a look to the alternatives, together with their respective
drawbacks.


<img class="full-width" src="{{ "/assets/img/blog/other/general_push_scheme.png" | prepend: site.baseurl }}" width="80%" height="auto">

## Cache digests

The solution to the problem above comes by having the browser and server
trade information.
Colloquially, the browser  tells very early to the server
"I already have this and that asset",
so that the server  knows that it doesn't need to push them.

The idea is really straightforward, but as they say, the devil is on the
details.
The first question worth answering is how to *identify*, that is, how to
give a name, to the
assets that the browser has.
Well, that was solved ages ago, you may say, URLs are used to identify
assets.

### Uncompressed digests are too big

Indeed, URLs can be used as the underlying information in that first message
that the browser sends to the server.
The  digest then says "I already have this URL and that other URL".
The only issue with URLs is that they are long, having an average length easily over 60 bytes.

[We have discussed before](https://www.shimmercat.com/en/blog/articles/data-density/#-a-name-req-href-href-a-how-many-http-requests-per-page-) that there is an average of 86 requests per page,
but many of them are to external services.
Of the remaining, many  are not in the critical rendering path
and therefore don't need to be included in a
*push list*.
Therefore we can take 30 or 40 as a relatively high number of assets
to push.
We allow for this high number because with HTTP/2 there is no
need to bundle assets.

Now we can  estimate the size of an uncompressed URLs
cache digest.
Let's say that we are interested in only pushing assets which are considered
fundamental to a web page,
but consider that  most sites are made of multiple pages, and that
each page has a chance to contribute some new assets to a digest.
How many bytes would be required by all URLs that a user has fetched
from a server, by the time the user has visited the fifth page?

<iframe src="https://jscalc.io/embed/nihY6NxtjtqhVo1B" class="text-assets" width="100%" height="250" frameborder="0" marginheight="0" marginwidth="0" style="border: 1px solid rgba(0,0,0,0.12)"></iframe>

To give you a more precise number, this page where you are reading this article
shares around 30 assets with other
pages in the site, and the average number of  new assets (say, a new Javascript file
with some article-specific functionality) per visited page is around 0.7.
So, if we were to use URLs, we would be using 60 x (30 + 5 x 0.5) bytes per cache digest,
which is close to 2 kilobytes.

Complicating the situation is the fact that assets in websites evolve: many website owners
update the assets that make a page frequently.
For ultimate performance, each combination of asset and asset version will receive a unique
URL via cache busting.
Since the browser can't possibly know if there is a new version of the asset when sending the
cache digest, all versions must be sent as well.

Can compression help?
Yes of course.
To my knowledge, the most effective method of compression for this particular problem has been devised by
Kazuho Oku and Mark Nottingham, and has been published as an
[Internet Draft](https://tools.ietf.org/html/draft-kazuho-h2-cache-digest-00).

### Lossy compression with Rice Encoding

Let's recapitulate: at the beginning of a browser and server message exchange, the browser
wants to send the message "I already have this URL and that other URL".
But sending those URLs literally can take a lot of space.
Therefore, we want to compress them.

K. Oku and M. Nottingham thought to use Rice encoding to compress the sets.
An overview follows:

* Each resource is identified by a full  URL,
  from scheme to query string, e.g. "https://media.shimmercat.com/blog_post_1/waiting_browser.jpg?bil=0!12,30".
  [Etags](https://en.wikipedia.org/wiki/HTTP_ETag)
  can optionally be taken into account.

* Instead of sending the URLs literally, a  SHA-256 hash is taken from
  a combination of URL Etag identifier, or from the URL only if there is
  no Etag.
  Then the hash is truncated to a carefully tuned number of bits,
  and the resulting numbers are compressed using Rice encoding.

You can read the particulars of this encoding scheme
in the Internet Draft linked
above, and for the general mathematical technique you can read
[the Wikipedia article](https://en.wikipedia.org/wiki/Golomb_coding).

In any case, the result of the process is a digest string where there is a
very small number of bits
for each of the original URLs.
The number of bits range from 5 to 15 in typical cases, which is less than
two bytes.

<iframe src="https://jscalc.io/embed/xN7kClwgPGuAEFcq" class="text-assets" width="100%" height="250" frameborder="0" marginheight="0" marginwidth="0" style="border: 1px solid rgba(0,0,0,0.12)"></iframe>

The small size of the cache digest is achieved because the compression is lossy,
that is, the original URLs can't be reconstructed
from the digest string (compare with the situation in the previous
subsection).
Instead, the server can take one of the URLs that it intends to push,
compute its hash and see if it is included in the digest sent from
the browser.
This last test is also lossy, since there is a chance that two
different URLs end up with the same truncated hash.
In such situations, the server will wrongly assume that the browser already
has the resource, in what is  called a false positive.

False positives are not  a big deal, it just means that the browser will
get to request an asset that it doesn't have instead of having the asset pushed.
That's the "normal" way of doing things on the web.
Also note that for false positives to happen the browser needs to
have already some of the assets from the site in its cache, so the performance
hit would be small.

### Performance

Cache digests have some CPU and I/O cost, but they could be slightly more efficient than
the traditional approach.

The equivalent to cache digests in the traditional HTTP world without HTTP/2 Push  is
[conditional requests](https://tools.ietf.org/html/rfc7232), that is, requests
that may end-up in a 304 response.
When the server processes a conditional request, it needs to HPACK-decompress and parse
the request headers.
And it needs to do that for each conditional request.

By contrast, a digest is a relatively short string encompassing a large group of
assets.
Once received by the server, this string is  decompressed  to a set of numbers.
Algorithms operating on numbers
tend to use less memory than URL normalization and string comparison algorithms.
Which in turn improves CPU cache performance.
The numbers themselves are derived from cryptographic hashes of the URLs, but those
hashes can be computed once and saved forever.

Beyond these theoretical considerations, we have observed that ShimmerCat effectively
performs better when using cache digests and pushing sets of assets vs receiving and
responding to a large set of conditional requests.
But this could be an implementation detail.

## Alternatives

Although there may be more sound ways of solving the problem of knowing which assets the browser
already has,
so far we haven't been able to find one that works so well in as many scenarios as Rice
encoding of URL sets  do.
Here we discuss some of the variations and why they are not so good.

### Bitmaps

The idea behind bitsets is to assign to each asset a unique, small identification
number.
That number can be used to index a
[bitmap](https://en.wikipedia.org/wiki/Bit_array) in the cache digest.
If the browser has an asset, there is a one for that bit position, otherwise, a zero.

Pros about this approach: it is very easy to implement.

Cons: we need a new identifier for each new asset, including different versions
of the same one. There is no  clear way to re-use those identifiers.
This may be acceptable for really small websites, but it doesn't scale well.
Just think on a small personal blog whose author is tweaking frequently the main
CSS file: each version may require a new identifier, and a new bit.

### Versions

We are talking about versions. What if the digest is just
a version number?
Then when a request comes, the server can compare the version number present in the
digest with the current version of the site, and only push assets that have changed
between the two versions.

This approach could certainly solve the issue with versions.
But most websites have different sets of assets to push.
For example, we have different CSS for the front-page and for the rest of the pages
in the site.
Since the server needs to know which sets of assets the browser has,
the cache digest should also contain a set of sets of assets.
This representation is at least as complicated as Rice encoding,
with the drawback of requiring set expansions and set difference
computations on the server, plus keeping a repository of versions.

### Stream resets

When a browser considers a resource fresh, it resets any pushed streams for
that asset.
This behavior has a drawback:
we need to keep using cache busting.
But it does save some resources in the server by telling it that a pushed stream
is not needed.

Unfortunately, the stream reset may reach the server after it has already commited
some resources to the push, since typical round-trip times are well over 100ms.
During this time, the  server may dedicate resources to pushing assets which are not going
to be used anyway.
In its current version, ShimmerCat sends all the data of the main stream, e.g., the `index.html`
file before pushing any streams.
That is, we send first the push promises, then header and data of the principal stream,
and finally response headers and data of the pushed streams.
No resources are commited to the pushed streams until the data of the main
stream is sent, so that there is a bit more of time to receive and process a
stream reset.

## What do you think?

The intention of this article was to introduce the idea of cache digests to web developers.
To keep it light and general, and because there are not yet any standards, we have omitted many
technical details from this article.
We will take some of those details in follow-up blog posts or for those
which are very specific to our implementation, in  ShimmerCat's documentation
pages.

The Internet Draft could introduce an extra HTTP/2 frame for cache digests.
I particularly dislike this prospect of moving information  related to HTTP
caching away from HTTP headers, but I suspect that the HTTP intermediary
industry has good reasons.

In any case, since the introduction of HTTP/2 last year, people have been dicussing ideas
for cache digests, and many interesting viewpoints are coming up all the time.
What is your take?
