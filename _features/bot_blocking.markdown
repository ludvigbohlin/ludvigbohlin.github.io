---
layout: feature
title:  "Bot blocking"
---
Bots account for a large amount of traffic in many e-commerce websites. The problem is that they take resources and make the site slow.
By having machine-learning separate bad bots from good bots and human visitors, ShimmerCat can allocate more resources to human visitors to make the website load faster for them.

<img class="full-width" src="{{ "/assets/img/features/botblocking.svg" | prepend: site.baseurl }}" width="80%" height="auto">

#### How does the bot filtering works?
If ShimmerCat’s algorithms suspect that a visitor is a bot, we redirect her/him to a captcha page of you choice. If it turns out to be a human, the captcha page let's her through after clicking a check-box. We have an algorithm that learns to distinguish between humans and bots by looking to things like past interactions and behaviors which are specific to the website. It is of course also possible to add and remove IP addresses manually.
ShimmerCat also allows some bots to enter the site. At the moment, for example, we let in all bots from Google, BingBot, and Facebook. 


