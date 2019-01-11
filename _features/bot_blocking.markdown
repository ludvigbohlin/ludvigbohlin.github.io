---
layout: feature
title:  "Bot Blocking"
resource: true
categories: [accelerator, regional, global, enterprise, display]
---
Bots account for a large amount of traffic in many e-commerce websites. The problem is that they take resources and make the site slow.
By having machine-learning separate bad bots from good bots and human visitors, ShimmerCat can allocate more resources to human visitors to make the website load faster for them.

<img class="full-width" src="{{ "/assets/img/features/botblocking.svg" | prepend: site.baseurl }}" width="80%" height="auto">

#### How does the bot filtering works?
If ShimmerCat’s algorithms suspect that a visitor is a bot, we redirect her/him to a captcha page of you choice. If it turns out to be a human, the captcha page let's her through after clicking a check-box. We have an algorithm that learns to distinguish between humans and bots by looking to things like past interactions and behaviors which are specific to the website. It is of course also possible to add and remove IP addresses manually.
ShimmerCat also allows some bots to enter the site. At the moment, for example, we let in all bots from Google, BingBot, and Facebook. 


#### Connections and other scarce resources
Each visitor uses computer resources. In particular, all transactions between a website visitor and the website goes through something called a TPC connection socket. The more connections open at a given moment, the less resources there are to handle further connections, until they are exhausted and connections start being rejected. This is akin to closing a shop because there are too many people inside; something that definitely should not happen with a digital shop.
In the HTTP/1.1 world, each visitor would use not one, but several connections when fetching a page from a website, which further adds to the scarcity of connections.
Because TCP connections (let’s shorten it to “connections” from now on) are so constrained, HTTP/1.1 servers would close each connection to a visitor as soon as possible. The analogy with a physical shop is having the clerks go to a visitor and tell her **“darling, you are not looking to our wares with enough focus and desire, would you be a dear and walk out?”**. In practice, the human website visitor may not notice how rude the web server is, because the browser transparently re-establishes the connection as soon as is needed. The caveat, however, is speed: establishing a new connection may take sometime and make navigation the website feel sluggish. 
HTTP/2 was expected to relax this attitude from web servers a bit, because an HTTP/2 visitor only needs to use a socket. However, because of robots, there may still be necessary to close connections early. 
The perfect work-around is to know when a connection is coming from a robot, and close it early. 

#### What malicious bots do
- They hunt for copyright violations to demand ransom. 
- They target common vulnerabilities, [see this.](https://www.reddit.com/r/webdev/comments/6qgxqv/what_are_your_experiences_with_bots_and_security/)

#### What good bots do
- Index pages
- Generate page previews for e.g. Facebook and such 

#### The Problem
As a website grows in popularity, the spam invariably increases. Well-known methods of spam prevention including:
- Banning IP addresses
- Forcing users to register and verify their email before posting
- CAPTCHA images or similar Turing tests
- Third-party solutions which use ever-growing databases of known spammers to compare against
- Manually moderating or approving posts

The problem with the majority of these methods is that the users suffer. Banning IP addresses rarely works because those can be spoofed or reassigned and you might actually end up blocking a legitimate user; spammers tend to use dynamic IPs anyway.

Forcing users to register or read a difficult CAPTCHA image shifts the burden from the website owner onto the user, causing them to have to jump through more hoops to contribute. CAPTCHA images are a horrible solution anyway in that they don’t cater well to those with disabilities and they’re also increasingly vulnerable to OCR (Optical Character Recognition) programs.

A drawback with relying on some third-party solution is more dependencies, and the fewer dependencies the better. That leaves manually sorting through spam. Some people will argue that the added complexity is a necessary evil, but ShimmerCat instead offers an automatic solution to handle the problem.






