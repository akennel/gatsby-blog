---
title: Created new Sharepoint warm up script – SPWakeUp
date: 2008-03-05
---

Several months ago, I found a warmup script on the internet: WarmupServer.I’ve been using this script on our servers ever since, running it every morning to refresh the page cache on IIS. It’s been working great…but I’ve noticed a problem. The script lets you “warm up” as many sites as you want, but you have…


<!-- end -->

Several months ago, I found a warmup script on the internet: [WarmupServer.](http://blogs.msdn.com/joelo/archive/2006/08/13/697044.aspx)  
I’ve been using this script on our servers ever since, running it every morning to refresh the page cache on IIS. It’s been working great…but I’ve noticed a problem. The script lets you “warm up” as many sites as you want, but you have to edit a batch file to add the URL.

Our Sharepoint server is getting pretty big; what used to be a few dozen sites is quickly growing into the hundreds. The batch script just isn’t cutting it anymore.

Yesterday, I decided to write something better. Instead of requiring that each URL be manually added to a list, you give this script a starting point, and it automatically builds a list of all the sub sites. You can go as many layers deep as you want. (IE: Subsites of a subsite of a subsite) The deeper you want to search, the longer it takes, of course, but it still is able to touch every site on our portal in about 2 minutes.

This was my first C# project, so I learned a great deal putting it together. You can download a copy at [http://code.msdn.microsoft.com/spwakeup](http://code.msdn.microsoft.com/spwakeup).

