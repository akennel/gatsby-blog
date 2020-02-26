---
title: New version of SPWakeUp just posted
date: 2008-10-07
---

As usual, you'll find it at: http://www.codeplex.com/spwakeup This new version is just a bug fix, no new features.  I'd been noticing that on my production server, I was seeing waaaay too many MySites.  Turns out the script that was checking for Site Collections was badly broken.  Nothing to cause any serious problems, but it was…


<!-- end -->

<div dir="ltr">As usual, you'll find it at: [http://www.codeplex.com/spwakeup](http://www.codeplex.com/spwakeup)



This new version is just a bug fix, no new features.  I'd been noticing that on my production server, I was seeing waaaay too many MySites.  Turns out the script that was checking for Site Collections was badly broken.  Nothing to cause any serious problems, but it was generating URLs that just didn't exist, and processing the same Web App hundreds of times.  

The fix turned out to be one line of code.  While I was at it, I did some general clean-up of the logging stuff, and changed the descriptions to make it obvious when a URL is a Site Collection and when it is a Sub Web.

Here's how I described the fix on the CodePlex site:
SPWakeup works by building a list of web applications on a server, then checks  each web app for all its Site Collections, then checks each Site Collection for  all its Sub Webs. This bug arose from the code that checked Web Apps for Site  Collections.  
I pull a list of Site Collections by first building a new web  app instance using the URL of the current listed Web App: SPWebApplication  webApp = new SPSite(pullcurrentsite).WebApplication;

The problem here is my initial web app list also includes some Site Collections. So my list looks like this:  
[http://webapp](http://webapp/)  
[http://webapp/sitecollection1](http://webapp/sitecollection1)  
[http://webapp/sitecollection2](http://webapp/sitecollection2)  
etc

When I create my new WebApp instance in the code above, I pull the current URL from my list. Since I'm building a Web App, it ignores the Site Collection portion of the URL, and just uses the webapp. That means that I end up processing the same web app multiple times. 

I got around this by just doing a list.Contains check before building the webapp. That prevents the webapp from being scanned more than once. Which speeds things up considerably, and prevents those non-existent URLs from being created.

I also cleaned up some of the  logging code, and eliminated an if/else statement that was never being called.


