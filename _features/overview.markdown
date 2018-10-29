---
layout: feature
title:  "System Overview"
---
ShimmerCat Accelerator is simply added on top of your current e-commerce website where it takes the place of a conventional edge server, e.g. Apache or NginX. No need for any changes to your current setup. ShimmerCat handles the communication with the website visitor while also collecting valuable data. This log data is sent to our AI engine and analysis service, where we detect patterns, and send optimization rules back to ShimmerCat.  These rules are then used to deliver an optimized and faster loading website to the visitors.

Below is a system overview. 

<img class="full-width" src="{{ "/assets/img/features/overview.svg" | prepend: site.baseurl }}" width="80%" height="auto">

#### Load balancer
We usually deploy Haproxy in front of ShimmerCat. Haproxy has several advantages, including very robust SNI support, live-checks and fallback options. ShimmerCat also provides configuration and binaries for Haproxy if needed.



