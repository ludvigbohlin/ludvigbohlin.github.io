---
layout: feature
title:  "Strategic Asset Delivery"
resource: true
categories: [accelerator, regional, global, enterprise, display]
---
ShimmerCat has been built from the ground up to leverage HTTP/2 features like asset priority with extreme flexiblity. How is this important for minizing loading times?

### The old technology: HTTP/1.1
With HTTP/1.1, the standard which has been around since June 1999, the browser is completely in control of the asset delivery process, and the only thing that the server can do is to serve each request coming from the browser as fast as possible. Because the server has no context for the requests, it doesn’t know if a particular request for an image or a script should be served before any other request which is coming at the same time. To work around that limita- tion, browsers do a decent job of deciding which assets are needed first and conveying that infor- mation to the server. With HTTP/1.1 they can se- lect which requests to issue first in the pool of available HTTP/1.1 connections (which is quite low).


### Strategic asset delivery with ShimmerCat and HTTP/2
When HTTP/2 was designed, browser vendors decided that the hack kind of control was a good thing, and created explicit mechanisms to convey this information in an HTTP/2 connection through priority frames. But this doesn’t change the fact that the browser needs to make split second decisions about which assets to prioritize with incomplete information. 

When contents that form a web page are loaded, there is a [significant amount of time when the browser is just waiting for some data](https://www.shimmercat.com/blog/data-density.html). When the browser starts getting data from the server, and as it gets more data, it starts creating its assessment of which things are most urgent and starts acting on this information. Why should we let the browser do this work in an imperfect way if the web page designer and by extension the web server can do a much bet- ter job with perfect information? That’s why we created ShimmerCat with automatic asset prioritisation.


