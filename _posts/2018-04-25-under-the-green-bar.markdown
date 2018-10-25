---
layout: post
title: "Under the green bar"
date: 2018-04-25 16:54:46
author: ShimmerCat's team
categories:
- blog
- HTTP/2 push
img: treasure_under_the_green_canoppy.jpg
thumb: treasure_under_the_green_canoppy_thumb.jpg
---

#### Summary
<b>When it comes to enhancing web page loading times using HTTP/2, there is an unexplored, uncharted land of opportunities,  by just using backend waiting times to — optimistically — start sending assets to the browser before the contents are returned by the backend.</b>

## Web application backend waiting times

There is a time interval that goes from when an application in say, Django or PHP,
receives a request, and the moment when it starts sending the response.
During that time, the user is waiting, and that's generally not good.

Much has been written about this, and know we are also going to take a closer look.
The difference is that we are interested in applications of HTTP/2 that have
been overlooked before and that would allow people to skip these waiting times.

### We had an amnesia episode

We love to use HTTP/2 and HTTP/2 Push to optimize web page loading times.
Now we have discovered a new way of doing that, namely, by using backend processing
times to start optimistically pushing assets.

Is a new way of quickening web applications  really necessary?
A few months ago, this question didn't pass our mind often, since we
were busy with bringing ShimmerCat's pure *consulting* mechanism up to speed and we were  not letting web applications do things their way.

What we call pure consulting is simply using a  HEAD request to check if a URL is valid,
and since neither HEAD requests nor responses carry contents,
the backend times were hardly noticeable.

Fast forward to the present, in the last few months we have been working with
"classical" applications like Wordpress and Discourse. In these applications, the HTML contents are generated after a lot of bustling
with databases and template engines.
For our own www.shimmercat.com site, we have  been experimenting with a more traditional
PostgreSQL database to hold contents, and with alternative,
cheaper hosting plans.

The result of all of this is that we became more aware of backend
processing times... they can be really big!


### Backend waiting time as (not) a green barren wasteland...

In the top panel of this article's header figure, we have shown the green "waiting" state
as Chrome devtools shows it for an HTTP request that is
fulfilled by a web application backend.
This is the Django backend that we use to power shimmercat.com (this very site where
you are reading this article).

Our backend takes a variable amount of time to start creating a response, once
a request is received.
Our shortest time is  8 milliseconds, and that's
when a requested article is cached at Redis and Redis' RAM contents have not been
swapped out to disk by one of our VPS noisy neighbors.
But if we are not that lucky, we can spend  up to 800 milliseconds of
[wall time](https://en.wikipedia.org/wiki/Wall-clock_time) executing
Python/Django code.

This is not just a problem with our backend.
Being a computer geek, I have tuned my desktop hardware adequately
for performance: slightly overclocked i5-4690K, fast RAM correctly configured
and benchmarked, and SSD RAID 0, again correctly configured and benchmarked.
In fact, the bottom panel of the header figure for this article is a screenshot from
[Subnautica](http://unknownworlds.com/subnautica/) running flawlessly in
my desktop at highest settings.
But with my hardware, a fresh installation of Wordpress 4.5 takes an average of
180 milliseconds from the time a request is received to when it
starts being answered by the [HHVM virtual machine](http://hhvm.com/).
These  times were measured by inspecting network packets with
[Wireshark](https://www.wireshark.org/).

Jumping from Wordpress to Discourse, we can just quote
one member of their team, who affirms that Discourse' RoR backend response times go from 50 to 100 ms.

### How many kibibytes can we fit there under the green?


With these few data-points at hand we can produce some upper bounds.
To know how many bytes is possible to send during the time the application is preparing
a response, we just need to multiply the time by effective
[goodput](https://en.wikipedia.org/wiki/Goodput).
Since these responses may happen at the beginning of a connection, when
TCP slow start is still prevailing, let's take
a conservative estimate of goodput of 2MiB/s.

Then ShimmerCat (or any other web server, for that matter)
would be able to send  130 KiB of data when
Django's backend at shimmercat.com takes 65 ms to create an answer,
which is 57% of the contents downloaded directly from our server in our main page.
Or anything up to 400%  when our bad luck makes our backend
take close to a second to start answering.
For the virgin Wordpress installation (145 KiBi) whose local's performance
I was ranting about before, that fraction is upwards 240%.
And for Discourse, assuming a 100ms response time, it is around 20%.

Now, is this empty talk or can we actually  use these fantastic percentages
to deliver significant chunks of our web applications earlier?
In the rest of this article, we examine both obvious but unpractical
solutions, and then more practical ways to go about it.

## Making better use of backend waiting times

### Impractical solution: switch to a compiled backend language

The best way to start sending contents to the user's browser is to have
a faster web application backend.
And the first instinct of a polyglot computer programmer would probably
be to run towards a compiled language.

For an example of what is possible to achieve this way,
take a look to [Yesod](http://www.yesodweb.com/).
Yesod is a web application framework, and they deliver their
blog in only 25KiB of compressed HTML.
They also add a couple of  PNGs for the logo, but all in all  they have fantastical
response times.

But you don't need to be so extreme and end up using Haskell (which
we love, by the way).
C#, Java and even C++ (through [CppCMS](http://cppcms.com/wikipp/en/page/main))
are also suitable candidates.

That said, it is hard to turn your back to the popularity to mainstream
web languages and frameworks, and one also needs to account
for the availability of skilled developers.
And what about  legacy code?

NodeJS, PHP, Ruby on Rails and Python are here to stay, they all have
mature ecosystems and wonderful communities.
So, let's better find out ways to make do with them.

So let's go for the practical solutions.

### Practical solution 1: Ditch your VPS, run in native hardware and deploy Redis or Memcached

Native hardware for hosting is not necessarily expensive.
Take a look for example to [Scaleway](https://www.scaleway.com/), they provide
what they call "physicalization" starting with very affordable 12 EUR/month bare metal servers.

With a bare-metal server, application response times are less of an unknown, specially when
a caching solution like Redis or Memcached is used.
Best of all, you get to keep your favorite programming language and framework.
Then of course you can use ShimmerCat to obliterate the effects of network latency,
and there you can sit back, relax and wait until you get those million hits per month
that will make you *actually need* a CDN.

### Practical solution 2: Use ShimmerCat's pure-consulting mode

This can be combined with the one above, or it can work on its own for the cases
of very dynamic content when caching can't be used.
We talked about it at the beginning of this article, and it consists on having
the backend answer yes/no to the essential question "does this URL exists?".
Arguably, answering this may use less CPU and I/O resources than providing the
full contents from the backend.
Once ShimmerCat knows if a resource exists, it will deliver a template HTML
on its own and also
allow you to use HTTP/2 Push with cache digests.
Then a rich front-end application can load the rest of the contents using
AJAX.

A first drawback with this is that more requests and round-trips are needed to
get actual contents on the client than if we were sending the contents
on the first GET request that the server receives.
We are aware of this problem, and our *content-disposition:use-json*
directive is a first workaround.
We are also planning on enabling HTTP/2 Push mechanisms to allow the application
progressively complete the information sent to the client.

A second drawback is that the HTML for two different URL paths is never cached by the browser
using the same HTML contents, even if -- as it happens with pure consulting --
those HTML contents are shared by all URL paths with the same prefix.

A third issue is that sometimes just knowing if a URL path is valid may
take too long.

### Practical solution 3: Stream contents

A better variation of the above is to stream HTML contents from the backend
application.
With ShimmerCat, as soon as the web application's backend HTTP response headers
are received, the server will send  HTTP/2 push promises and start sending
your backend contents as they arrive, while automatically filling any  gaps
on the byte-stream from the backend  with pushed asset data or assets requested
by the browser.

The drawback here is that, as before, there are no warranties on the application
being able to send the first headers quickly.
Also, well known applications like Wordpress do not usually stream their
responses.

### Our secret gold: when possible and advisable, unconditionally push assets.

Barring a catastrophic failure, some URLs in a website are known to be always there.
In those cases, for some pages is possible to skip the backend altogether and serve a static page.

But even when significant parts of a webpage are dynamic, one can still push
static assets (css, Javascript and such) using HTTP/2 Push before the dynamic
contents are received from the  backend.


**Notes:**
- The real time for the first answer when setting up Wordpress was 1.85 seconds.
    - For the login view, it was 0 seconds 596.996002 milliseconds
    - First login: 6 seconds 618.988298 milliseconds
    - For fetching an article: 190milliseconds
