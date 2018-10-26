---
layout: feature
title:  "HTTP/2 Push"
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/zPqFjLlP8Yw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br>

The web normally works by pulling assets: as soon as the browser knows that it will need a script, stylesheet or image, it pulls it. HTTP/2 Push allows the server to take the initiative by sending assets it knows the browser is going to need ahead of time. The challenge is making good use of HTTP/2 Push in the way ShimmerCat can do thanks to the AI engine that analyses data and create optimisation rules.

ShimmerCat uses HTTP/2 Push in conjunction with cache digests and asset prediction to automatically reduce loading times in a way that no other web server does.

<img class="full-width" src="{{ "/assets/img/features/http2push.svg" | prepend: site.baseurl }}" width="80%" height="auto">

#### How does HTTP/2 Push work with caching?
The short answer is that it works well: if a resource is in the browser's cache, there are ways to avoid pushing it. Our implementation of HTTP/2 Push is very good at avoiding reiterated push.
