---
title: Patched the Dev Server today
date: 2008-05-08
---

D was testing a workflow and ran into the email bug that we first noticed back in February.  This is a bug that causes the first workflow notification to appear as raw HTML code.  Luckily, I wrote down the KB # at the time, #937906, so was able to quickly find it again.  The patch…


<!-- end -->


D was testing a workflow and ran into the email bug that we first  noticed back in February.  This is a bug that causes the first workflow notification to appear as raw HTML code.  Luckily, I wrote down the KB # at the time, #937906, so was  able to quickly find it again.  The patch I'd installed back then was the 64bit  version, so I needed to download a new copy for our 32bit Dev server.  
And this is when Microsoft decided to annoy me.  You can't just download the patch, you have to request permission to download the patch.  Why?  What possible reason could there be to have your customer jump through this hoop?

More baffling, the web page that you use to request permission to download the patch asks you what software the patch will be used for.  Excuse me?  It's a patch.  By definition it's only good for one piece of software.  Once you are approved to download the patch, you receive an email with a download link and a password to unzip the file.  Again…why?  

Years ago I owned a radio tuner card for my PC.  This was a very simple card that installed into an ISA slot, and used a patch cable to output sound to your sound card.  One day I was upgrading my computer and moved the card to my new machine.  I couldn't find the floppy with the software that allowed you to tune the radio on the card.  (Yes, floppy disk…I told you it was a long time ago).    
 The company had a web site (which was rare at the time) but they wouldn't make the software available for download.  At the time, I remember being just as baffled as I am today.  What possible reason could there be not to make the software available?  The software only works with your own hardware.  If you don't have the hardware, the software is useless.  I eventually talked a customer support rep into mailing me a new disk with the radio software, but it would have been so much cheaper and faster to just make the software available for download. 
   
Ten years later and I'm in the same situation.  If I didn't already have the software, I wouldn't have anything to patch.  Why are you paying someone to maintain all this extra code when a simple link to the file would suffice?  And that's assuming that the system was completely automated.  It's entirely possible that Microsoft is paying someone to monitor a queue and send out links as the requests come in.  



Well, eventually I got my patch.  And I installed it.  And everyone is happy.  I think I'll try to dig up that radio card this weekend.

