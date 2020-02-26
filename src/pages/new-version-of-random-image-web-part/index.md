---
title: New version of Random Image web part
date: 2009-02-03
---

It's been a long time since my last post.  The Holidays and a new job and manager have put my off my usual schedule.  Today I finally got around to looking at a problem with my Random Image web part that was first complained about in late November.  I've never been able to reproduce the…


<!-- end -->

It's been a long time since my last post.  The Holidays and a new job and manager have put my off my usual schedule.  Today I finally got around to looking at a problem with my Random Image web part that was first complained about in late November.  I've never been able to reproduce the problem on any of my servers (I'm up to 4 test environments at the moment) so I wasn't sure where to even start to fix the problem.

 Luckily, the user reporting the problem posted links to a couple of pages that described the problem and posted a fix.  I was able to implement the new code and a few minutes later had the new version posted.  You'll find it at: [http://www.codeplex.com/randomimage2](http://www.codeplex.com/randomimage2)

Another reason I haven't posted much is that I've been banging my head against another web part that I just can't get to work.  I wanted to make simple Silverlight based slideshow web part.  There are a few examples out there on how to do this, but all of them attach the images to the project.  I wanted to point the web part to a Picture Library and generate the slide show from that.
It's been a night-mare.  The web part portion of the project was very easy, and getting that web part to display a Silverlight control was also simple.  Getting silverlight to display the images has so far proved to be impossible.  A large part of that is that I cannot attach my debugger to the Silverlight code, which makes finding and fixing bugs ridiculously difficult. 

I've given myself two weeks off before I spend any more time on this project.

