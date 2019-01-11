---
layout: feature
title:  "Enterprise Support"
resource: true
categories: [enterprise]
---
ShimmerCat Accelerator is simply added on top of your current e-commerce website where it takes the place of a conventional edge server, e.g. Apache or NginX. No need for any changes to your current setup. ShimmerCat handles the communication with the website visitor while also collecting valuable data. This log data is sent to our AI engine and analysis service, where we detect patterns, and send optimization rules back to ShimmerCat.  These rules are then used to deliver an optimized and faster loading website to the visitors.

The part where files and visitors are served happens in edge servers. Edge servers are Linux environments suitably provisioned to run ShimmerCat Accelerator. ShimmerCat should run in a Linux server or virtual appliance since it relies in Linux’s epoll for handling I/O channels in a scalable way. Your web application can, and should, run in a separate server environment.
Often it is enough for a site with just one edge server, although as a matter of redundancy and resiliency we recommend a setup with a two edges, see for example the figure below. You can run your our own edge servers, and configure as many edge servers as you want per domain. You can also have as many domains as you want in a single edge server.

Below is a system overview. 

<img class="full-width" src="{{ "/assets/img/features/overview.svg" | prepend: site.baseurl }}" width="80%" height="auto">

#### Load balancer
We usually deploy Haproxy in front of ShimmerCat. Haproxy has several advantages, including very robust SNI support, live-checks and fallback options. ShimmerCat also provides configuration and binaries for Haproxy if needed.



