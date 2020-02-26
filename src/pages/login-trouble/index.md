---
title: Login trouble
date: 2009-01-07
---

Our VP was getting prompted to login to the sharepoint server.  This is odd, because we've set up our server as a Local Intranet site on all our clients, and IE is supposed to pass along login credentials for these sites.  After a bit of hunting, I found that his Windows account had a password…


<!-- end -->

Our VP was getting prompted to login to the sharepoint server.  This is odd, because we've set up our server as a Local Intranet site on all our clients, and IE is supposed to pass along login credentials for these sites.  After a bit of hunting, I found that his Windows account had a password stored for the server.  This is found under User Management in the Control Panel.  Removing the password fixed the log in problem.

I've found a reference to this on the web.  Apparently when Windows has a password stored for a site, it uses that to try to login, and ignores the fact that the site is on the Intranet.  Annoying little bug, but easy to fix once you know what is happening.

