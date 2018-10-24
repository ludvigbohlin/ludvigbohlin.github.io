---
layout: post
title: "The Elusive Flash"
date: 2017-06-15 16:54:46
author: ShimmerCat's team
categories:
- blog
img: the_flash.jpg
thumb: the_flash_thumb.jpg
---
#### Summary
<b>A flash in a loading web page doesn't look good, but it is quite hard to solve when it happens randomly. We look to three tweaks that can make the flash more regular and therefore easier to solve.</b>

## Introduction

### It just knows when  your boss is looking

Damn, here is that flash again in your web page.
You spent the best part of last night trying to fix it, and you were
pretty sure it was *not* happening in your development workstation.
It was not even happening in the smartphone you bought two months ago.
But it has happened now, just when you were walking the boss through
the most recent changes to the website.
And it was not just a quick flash, it stayed forever on the screen, like
making sure everybody could see it.
Bummer!

In this post, we will take the first step  towards eliminating a flash in a web page,
which is finding a way to spot it in a regular basis.
Then it's just a matter of using the browser tools and experimenting a bit
before we can get rid of it for good.
We are eager to  apply some HTTP/2 tricks on that mission,
but we will leave it for a second post.
There is plenty to do with just the first part of the problem.

### Stop 0: Use Chrome's built-in snapshot tool

This is probably the first thing you did, but just in case,
a kind reminder:
Chrome's DevTools has a  snapshot tool.

<img class="full-width" src="{{ "/assets/img/blog/other/screenshot.png" | prepend: site.baseurl }}" width="80%" height="auto">


Chrome's snapshots are the low-hanging fruit when it comes to eradicating the flash,
I usually start there.
But at best the screenshot just records what Chrome does, and if the flash is
really not happening in the development computer, or if it is way too short, chances are
that it won't be captured.
Version 50 and later of Chrome in responsive view is a lot better at capturing
the "awkward moments" of a page load, even so, it may require a nudge.
Let's give it one!

### Not landing so many rockets on the moon

Consider that the
[computer in charge of taking the first crew to the moon](https://en.wikipedia.org/wiki/Apollo_Guidance_Computer)
had
4 [kibibyte](https://en.wikipedia.org/wiki/Kibibyte)
of RAM and pulsed at 2.048 MHz.
By those standards, your desktop computer can probably land simultaneously a
few hundred thousands of rockets on the moon without breaking
a sweat.
So here is what more likely is happening: your development computer has too
much CPU power and network bandwidth, and the flash is  imperceptible
under those conditions.

The flash becomes more evident when the web page is loading in an
environment where there is less CPU and bandwidth available, like the Celeron computer
with Windows XP that your boss carries around, or a smartphone.
Even then,  the flash may only happen occasionally.

Therefore, we need to do is to restrict the CPU and network bandwidth  available to the browser,
in other words, we need to put the browser on a diet.

## Putting the browser on a diet

### CPU access

If you develop from Linux, you want to use
[Cgroups](https://en.wikipedia.org/wiki/Cgroups)
to limit CPU availability to the browser.
That's because of all the tools available, Cgroups is the only
one that  controls an entire tree of processes, the kind
browsers create these days.

There are many excellent tutorials out there on how to use
Cgroups, but we are going to cut to the chase by using
a no-dependencies Python script that leverages Cgroups to run a process
tree at a very low speed.
Just get the script
[molasses.py](https://github.com/shimmercat/molasses/blob/master/molasses.py) via git
or with a `curl` command:

```
$ curl -O molasses.py https://raw.githubusercontent.com/shimmercat/molasses/master/molasses.py
```

Now, to run a browser or any other command with  capped CPU availability, just do:

```
$ python3 molasses.py launch -s 10% -- google-chrome
```

In the command above, 10% is the fraction of CPU that the browser can use, and anything
after the `--` is the command to execute.
You can put anything there, including a shell script if you need to run on a somewhat more
complicated setup.
If you are using ShimmerCat, you can just write `sc-tool chrome`
as the command after the two dashes.

### Reducing network bandwidth and increasing network latency for the browser

Next we reduce the amount of bandwidth available to the browser.
It's  also a good idea to add some artificial latency.
With Google Chrome, it is possible to use the `throttling` feature in the browser's
DevTools.

If you are using another browser or if you want a more faithful
network behavior, the options to simulate different network conditions in ShimmerCat are  quite handy.
If using ShimmerCat, disable HTTP/2 Push to get  latency
artifacts back:

```
$ shimmercat devlove --sim-bandwidth=1Mb/s --sim-latency=500ms --disable-push
```

## Using the computer as a high-speed camera

We are almost there, if we load the page now by pointing our slowed-down browser
to our slowed-down server, the flash has an almost 100% percent chance to appear.
But human eyes are slow, and to correlate the flash with its cause we really
need to measure when it appears and for how long.

We talked before about using the snapshot tool that comes with Google Chrome.
But since this tool doesn't seem to capture all the web page visual states,
let's go this time with a desktop-recording tool

There are plenty of tools for that in all operating systems.
In Linux, we have used `gtk-recordmydesktop` with good results.
Just fire it, point to the area of the screen containing your web page, and
hit the reload button in the browser.

<img class="full-width" src="{{ "/assets/img/blog/other/gtk_record_my_desktop.png" | prepend: site.baseurl }}" width="80%" height="auto">

Then we just look for the flash in the resulting video.
For that, the frame-to-frame mode of VLC media player is handy.
If you can find the flash in the resulting video, then you
know that it is there, furtively stalking and waiting for the next
team meeting...

More about how to kill it in a coming blog post.
Consider
[subscribing to our newsletter](http://eepurl.com/bHBCSv)
to not miss-out!
