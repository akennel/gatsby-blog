---
title: Fixed error on Web Front End boxes
date: 2008-04-14
---

Early on in the portal roll-out we were looking for a Weather Web Part.  The idea was to display the local weather for each facility on their home page.  I'd found a free Web Part from Bamboo Solutions that did just this.  I installed it on the servers, and it worked fine.  Months later, and…


<!-- end -->

Early on in the portal roll-out we were looking for a Weather Web Part.  The idea was to display the local weather for each facility on their home page.    
I'd found a free Web Part from Bamboo Solutions that did just this.  I installed it on the servers, and it worked fine.  Months later, and for one or another, we ended up not using it.  I uninstalled the Web Part using the installer software that Bamboo included with the Web Part and forgot about it.  The Big Crash we had with the site a couple of weeks ago made me take a deeper look than usual at the logs, and I noticed that we were getting daily error messages from the Bamboo Web Part.   
 When I uninstalled the Web Part, it removed the DLL from the GAC, but did not update the web.config to remove the Safe Controls reference.  I've just updated the web.config on Web1 and Web2 to remove this reference, recycled IIS, and used my spwakeup tool to rebuild the portal's aspx pages.  
 All went as expected, and the site is back to normal, without any error messages, and without any downtime for our users thanks to Load Balancing.

Now normally, this kind of activity wouldn't be worth mentioning.  This is the admin equivalent of wiping a smudge  with your shirtsleeve as you walk by a dirty window.  I, however, was very nervous.  This is the first return to normal life on these servers since the Big Crash.  I've been treating them with kid-gloves since that day; convinced that breathing on them wrong will bring the whole thing tumbling down again.  
 That's no way to live your life, and it's certainly not a good way to be an admin.  You cannot be frightened of your servers.  If you are certain of what you are doing, and you know that making a change is safe, you make the change.  Well, today I made the change.  It's nice to return life to normal.

