---
title: Creating a Test Site
date: 2008-02-21
---

In addition to the production portal, we created a test server for our developers to test out their applications without affecting the users. From the beginning, this test server hasn’t been a perfect copy of the production environment. We copied over the templates and CSS files, but it was a rough approximation. Today, D asked…


<!-- end -->

In addition to the production portal, we created a test server for our  developers to test out their applications without affecting the users.  From the  beginning, this test server hasn’t been a perfect copy of the production  environment.  We copied over the templates and CSS files, but it was a rough  approximation.
 
Today, D asked me to make him something better.  Luckily, I had already fixed the  Export bug that had been preventing us from exporting our production server.   This morning, I ran a full export and copied the files over to the test  server.
 
I then created a new Web Application on Port 90.  I didn’t want to break  the site already running on the test server, so I’m using a seperate Web App to  keep things separate.
 
I then ran my import…and ran into an error: FatalError: Could not find  WebTemplate KB#75806 with LCID 1033.  A bit of thought, and I realized that I  hadn’t installed all the “Fab 40” templates from Microsoft on this server.  I  quickly installed them and tried again.
 
This time I got, “Cannot import site. The exported site is based on the  template SPS#0 but the destination site is based on the template STS#0.”  This  error is more obvious.  I’d created the Site Collection using the Team Site  template.  Looking at the template numbers –Why don’t you include their title  in the error message, Microsoft?– I guessed that I should have used the  Collaboration Publishing template.
 
Third times a charm, and this time the Import managed to finish.   All the data is there, and the design is based on  our latest template.  Now I need to install all the 3rd part Web Parts that we’ve added.  There  are 2 that we’ve bought from an outside vendor: Stock Quotes, and Flash  Images.  I’ve gotten the Stock Quote reinstalled, and it seems to be OK.  The Flash Image rotator says that it installs, but I cannot get it added to  a page.  It just errors out and tells me to contact technical support.  So  that’s what I’ll do. 


 
The other Web Parts were created for us by our vendor.  I’ll need to work through  re-installing them.


