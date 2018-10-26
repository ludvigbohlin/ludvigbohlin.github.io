---
layout: feature
title:  "Edge Servers"
---
The part where files and visitors are served happens in edge servers. Edge servers are Linux environments suitably provisioned to run ShimmerCat. ShimmerCat should run in a Linux server or virtual appliance since it relies in Linux’s epoll for handling I/O channels in a scalable way. Your web application can, and should, run in a separate server environment.

<img class="full-width" src="{{ "/assets/img/features/edgeservers.svg" | prepend: site.baseurl }}" width="80%" height="auto">


#### Redundancy and capacity
Often it is enough for a site with just one edge server, although as a matter of redundancy and resiliency we recommend a setup with a two edges, see for example figure below. You can run your our own edge servers, and configure as many edge servers as you want per domain. You can also have as many domains as you want in a single edge server.
The VPS requirements for the amount and capacity of edge servers depends on the load. For some example recommendations with a lot of legroom:

- Daily visits: 50 000
- Recommended RAM capacity: 4GB
- Recommended Cores in VPS: 4

The requirements can be estimated by using the number of visitor page-views per month. This number can be found with, for example, Google Analytics, Alexa, Ahrefs, SEMRush, etc.