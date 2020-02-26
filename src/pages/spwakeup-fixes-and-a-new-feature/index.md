---
title: SPWakeup fixes and a new feature
date: 2008-09-15
---

I just released another new version of SPWakeup. Download a copy here: http://www.codeplex.com/spwakeupThis new version fixes a bunch of bugs that popped up in the last version. The biggest of which was causing it to crash on some servers when run against localhost. I’ve got 3 test servers and 1 production farm available to me….


<!-- end -->

<div dir="ltr">I just released another new version of SPWakeup.  Download a copy here:  [http://www.codeplex.com/spwakeup](http://www.codeplex.com/spwakeup)  
This new version fixes a bunch of bugs that popped up in the last version.  The biggest of which was causing it to crash on some servers when run against localhost.  I’ve got 3 test servers and 1 production farm available to me.  The script worked on all but one of them.  So, lucky for me it crashed on one of my own boxes.  It would have made fixing the bug much harder if I never got to see the error.

I’ve also added a new runtime option called -discover. This tells the script to search the server looking for all the local web applications. It’s pretty nifty, and I think in the next version, I’ll turn it on by default. 

The next option I want to add is something suggested on the app discusion page…a way to ignore sites. It shouldn’t be a problem to add this, as I’m already pulling out duplicates, I just need to decide the best way to set an ignore list. My first impulse is to copy the current -site/sites.conf approach with -igore:/ignore.conf. So, if you wanted to ignore a single site, you’d run spwakeup.exe -ignore:http://[site.domain.com](http://site.domain.com/). If you wanted to ignore a bunch of sites, you’d list them in a text file called ignore.conf. 

I’m going to think on this for a day or two before committing myself. 

