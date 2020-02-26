---
title: More IE headaches
date: 2008-02-12
---

We use rounded corners in the 3 main sections of the site.Today, VP decided to change the background color of the site, which means that the 4 graphic files used to create the round corners needed to be updated to the new color.I was volunteered to make the change. I found the files and used…


<!-- end -->

We use rounded corners in the 3 main sections of the site.  
Today, VP decided to change the background color of the site, which means that the 4 graphic files used to create the round corners needed to be updated to the new color.  
I was volunteered to make the change. I found the files and used Photoshop to update the colors and blend them together. Then I saved my changes and uploaded them to the site. Everything looks great on Firefox, but IE looks off. Using a color grabbing tool, I can see that IE is rendering the files with the wrong shade of blue.  
A bit of research leads me to this site: [The Sad Story of PNG Gamma Correction.](http://hsivonen.iki.fi/png-gamma/) Once again, IE bites me. Turns out it is trying to be helpful by applying a “guess” Gamma correction to my files. Why this would ever be a good idea I have no clue. Luckily there’s a fix. If you strip out the gamma information, IE will display the file unaltered.  
Another quick search finds the tool [pngcrush.](http://pmt.sourceforge.net/pngcrush/) Running the command: pngcrush -rem gAMA -rem cHRM -rem iCCP -rem sRGB infile.png outfile.png fixes the problem.

