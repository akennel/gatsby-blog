---
title: Trouble with Immediate Alerts job on my test box
date: 2008-09-23
---

We're about to do a test run of the Emergency Preparedness sites I've built.  Tomorrow, we'll be pretending there is a fire at one of our hospitals to test how well the email alerts work, and to see what problems people run into with the site. I'd been avoiding turning on email alerts because I…


<!-- end -->

<div dir="ltr">We're about to do a test run of the Emergency Preparedness sites I've built.  Tomorrow, we'll be pretending there is a fire at one of our hospitals to test how well the email alerts work, and to see what problems people run into with the site.



I'd been avoiding turning on email alerts because I didn't want to bother anyone with all the test documents I was generating, trying things out.  Now that I was less than 24 hours from the test, I decided to turn them on for myself, just to test that everything was OK.  Good thing I did.  Alerts on this test server were broken.

Luckily, I was able to easily find a fix from this site:  [http://cairocafe.blogspot.com/2008/05/moss-2007-alerts-demystified.html](http://cairocafe.blogspot.com/2008/05/moss-2007-alerts-demystified.html)

Turns out, you just need to re-add the timer job from the command line.  Here's the actual fix:



<span style="font-size: 78%;">stsadm.exe -o setproperty -url [http://server.mycompany.com](http://mywss30server/mysite) -pn alerts-enabled -pv true  
 </span><span style="font-size: 78%;">stsadm.exe -o setproperty -url </span>[<span style="font-size: 78%;">http://server.mycompany.com</span>](http://mywss30server/mysite)<span style="font-size: 78%;"> -pn job-immediate-alerts -pv "every 2 minutes"</span>

<span style="font-size: 10px;">  
</span>

<span style="font-size: 10px;">  
</span>




