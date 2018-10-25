---
layout: post
title: "How a smarter web stack can make your e-commerce faster"
date: 2018-04-25 16:54:46
author: ShimmerCat's team
categories:
- blog
- Monitoring
img: monitoring.jpg
thumb: monitoring_thumb.jpg
---

#### Summary
<b>We often talk about *Full stack monitoring, integrated*. The word “integrated” is quite abused in the tech world. Usually, “integrated” means that the feature comes with the product. So, ShimmerCat includes full stack monitoring, out of the box, and our service is rather unique even on that sense. But there is more.</b>

## Full stack monitoring
When it comes to infrastructure stacks, “monitoring” usually means watching numbers — called “metrics” — to know if things are working fine or not. For example, one can watch how much memory is in use in the server, or how active are Internet hackers targeting the site. If some of the numbers go outside acceptable ranges, a sysadmin receives a message asking her to fix the situation. For example, if memory is systematically being exhausted, the sysadmin can receive a message saying “please add more memory to the server”.

However, we go one step further and put monitoring to work on actively improving website speed. So, while conventional monitoring watches for things not getting worse, ShimmerCat’s monitoring is also used to improve website speed.  We start by using the word “integrated” in its second sense: “made to work well together”. Let’s illustrate with an example about how this works using three conventional metrics.

Say that conventional monitoring reports that in average a particular page of your site delivers 1.1 megabytes in images. Other than a reminder to check if you are optimizing your images properly, that in itself is not very useful. Conventional monitoring can also tell you that your PHP backend is using 0.7 seconds in average to build that page. This can be used as a starting point by the web developer to improve application performance — but we can use it even without involving the web developer. Let’s add a third number that conventional monitoring may or may not tell you: website visitors are connecting with an average data transfer speed of 5.6 MB/s. This last number is in itself the ultimate useless metric, because visitor transfer speed depends mostly of how the visitor is connecting to your site, and there is nothing one can do to improve that on the server. So, conventional monitoring may not even bother to give you that number.

But using the three previous metrics together can provide you a unique insight: for your concrete page, the web server can deliver in average 5.6 MB/s x 0.7s = 3.92 megabits = 0.49 megabytes while it waits for the PHP backend. That means that the site for this example can load, in average, 49% faster. As a teaser, I will tell you that there is actually a way to use that bandwidth: HTTP/2 Push, something that ShimmerCat excels at doing.

We collect all the three metrics in our dashboard.Machine learning and statistical inference is used not only to estimate some of the metrics in the dashboard, but also to compute which images should be delivered via HTTP/2 push for each request. No web-developer  intervention needed, and you can use it out of the box with your favourite e-commerce platform.