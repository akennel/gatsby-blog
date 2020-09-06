---
title: A new version of SPWakeup
date: 2008-09-13
---

I’ve finally gotten around to updating this app. SPWakeup was the first .Net application I’ve ever written, and as such, was written just as I’d write a Perl script. Specifically, it ignored all the Sharepoint hooks that .Net gives you and just shells out the command line. I could have done this app with batch…


<!-- end -->

I’ve finally gotten around to updating this app. SPWakeup was the first .Net application I’ve ever written, and as such, was written just as I’d write a Perl script. Specifically, it ignored all the Sharepoint hooks that .Net gives you and just shells out the command line.

I could have done this app with batch scripting to be honest, and only wrote it in C# as a way to get my feet wet. As a result, it was pitifully slow. I timed it waking my test box from a cold start, and it took nearly 3 minutes just to crawl the server building the list of sites.

So, ever since I released it, I’ve been wanting to rewrite it, but I got busy with other things. I’m not a programmer by trade, and administration has a way of filling your days. Long story short, things slowed up in the last month or so, and I got drawn into writing some Web Parts, which was a lot of fun, and taught me more of the Sharepoint options that .Net gives you.

On Friday, I was supposed to be working with a department head to customize a site, but she bailed on me, so I found myself with an empty afternoon. I copied the spwakeup project folder over to my dev machine and started to work. Most of the program I was able to keep unaltered — the HTML fetcher, the logging, the initialization of the app. I concentrated on the functions that found the Site Collections and then searched through each Site Collection looking for Sub Sites.

By the end of the day, my rewrite was running more or less error free. I headed home, and spent another couple of hours polishing up a few rough edges and putting in some error catching. The result is a much, much faster application. The time it takes to parse the site list has dropped to just a few seconds on my test box.

I still have some work to do, especially with how the script handles being pointed at http://localhost, and how it reacts when it finds a Sub Site it doesn’t have access to. But, the new version is much better than the old, I think.

Tell me what you think. You can download a copy from [http://www.codeplex.com/spwakeup](http://www.codeplex.com/spwakeup)

