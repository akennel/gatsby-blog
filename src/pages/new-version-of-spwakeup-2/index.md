---
title: New version of SPWakeUp
date: 2008-04-11
---

This latest version is a complete rewrite of the application.  As usual, you can download a copy from here: http://code.msdn.microsoft.com/spwakeupI learned to program on an Apple IIc on Basic.  Over the years, I've concentrated mostly on administration, and have only coded a few simple scripts for my own use, usually using batch files or Perl. …


<!-- end -->

This latest version is a complete rewrite of the application.  As usual, you can download a copy from here: [http://code.msdn.microsoft.com/spwakeup](http://code.msdn.microsoft.com/spwakeup)  
I learned to program on an Apple IIc on Basic.  Over the years, I've concentrated mostly on administration, and have only coded a few simple scripts for my own use, usually using batch files or Perl.  I've taken programming classes since, C++, Java, etc.  But to be honest, Object Oriented programming never really got into my bones.  
 All my applications are what I call Object Oriented lite:  I'll use big looped sections instead of Methods, and multi-dimensioned arrays instead of Objects.  I could see why an Object model was valuable, but I never embraces the tools for using it.

When I looked at spwakeup, I realized, that I'd done the same thing I always have.  And worse…this time it had gotten me in trouble.  
In my first version, I checked for sub webs, but not site collections.  When I decided to add in some code to check for site collections, I just squeezed it into my big loop.  But this meant that every URL was being checked twice, first for sub webs, then for site collections.  This made my application slow.  

I decided enough was enough, and forced myself to rewrite the thing from scratch.  This time, I didn't use a big loop, I created two methods: FindSubWebs and FindSiteCollections.  I just pass my starting list of sites to one, get the results, then pass the expanded list on to the other.  I stole the HTTP request code from the web, so it was already a method.  In the end, I had much cleaner code, and when I tested it on my servers, I'd shaved about 30% off the run time.

I also decided to address my configuration options.  In the first version, I required two configuration files, one to set search depth, the other to set the starting URL.  This wasn't really a design choice on my part — I couldn't figure out how to make command line switches work!  A few minutes playing with the debugger in Visual Studio cleared that up that mystery.  I now have what I think is a pretty elegant approach.

If you run spwakeup without any options and you don't have a sites.conf file, it sets search depth to the default value of 3 and runs against localhost.  My thought here was for a test environment or training computer.  I wanted to make it dead simple to use, just double-click and go.  
 If you want to specify the site you wake up, just set it at run time: spwakeup.exe -site:[http://mysite.com](http://mysite.com/)  
If you need to wake up more than one site, you can list them in sites.conf, just like you used to.

If you want to set an alternate search depth, just specify it at run time: spwakeup.exe -depth:6  
If you want to wake up [http://mysite.com](http://mysite.com/) at a depth level of 2: spwakeup.exe -depth:2 -site:[http://mysite.com](http://mysite.com/)

Last, I decided to add a logging option.  To be honest, I only added this because I thought people might like it.  Personally I just pipe the output into a text file when I want to log an app like this.  But, I added the switch -log:  so that people could set the output to something.  This option doesn't log everything, for example it doesn't show the raw HTML that gets displayed to the console when the app is run.  Instead it just shows a synopsis, How many sites were found, what was the result on each site when it was woken.

In all, I've been flattered that other people seem to like this little application.  In its various versions, it's now been downloaded over 50 times.  I think this version will be my last.  I can't really think of any other features to add to what is a pretty simple application at its heart.  I'll add bug-fixes if I run into any errors, and I might make some improvements to logging, but I don't think I'll do another rewrite like this.

Next project:  Andrew's 100% Unsupported Run-At-Your-Own-Risk Sharepoint Site Level Backup.

