---
title: Update to SPWakeUp script
date: 2008-04-07
---

I made a small update to my SPWakeUp tool today. You can download a copy at: http://code.msdn.microsoft.com/spwakeup It’s something I should have done long ago: error catching! I noticed that when I included our MySites URL in the list of sites to wake up, the script was bombing. Turns out that when you create the…


<!-- end -->

<span style="font-size:100%;">I made a small update to my SPWakeUp tool today. You can download a copy at: </span>[<span style="font-size:100%;">http://code.msdn.microsoft.com/spwakeup</span>](http://code.msdn.microsoft.com/spwakeup)

<span style="font-size:100%;">It’s something I should have done long ago: error catching! I noticed that when I included our MySites URL in the list of sites to wake up, the script was bombing. Turns out that when you create the MySites web app, Sharepoint doesn’t create a matching Site. As users create their own MySites, they are created as new Site Collections. So, when my tool tries to wakeup the root site, it fails because there’s no site there.</span>

<span style="font-size:100%;">In the end, I did what I should have done in the first version of the tool, I wrapped my attempt to open the site in a Try/Catch block.</span>  
<span style="font-size:100%;">Here’s the new code:</span>  
<span style="font-size:100%;">try</span>  
<span style="font-size:100%;">{string webresult = GetWebPage(siteurl);</span>  
<span style="font-size:100%;">Console.Write(webresult);}</span>  
<span style="font-size:100%;">catch</span>  
<span style="font-size:100%;">{Console.Write(“Cannot reach site: ” + siteurl);}</span>

