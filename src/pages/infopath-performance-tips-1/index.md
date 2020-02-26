---
title: Infopath Performance tips #1
date: 2010-08-25
---

In the next few posts I'm going to share some of my experiences with Infopath performance tuning. Recently I took a look at one of my earliest forms to try to improve performance. The form in question was taking around 20 seconds to load when new, and up to 40 seconds to load when loaded…


<!-- end -->

In the next few posts I'm going to share some of my experiences with Infopath performance tuning. Recently I took a look at one of my earliest forms to try to improve performance. 

The form in question was taking around 20 seconds to load when new, and up to 40 seconds to load when loaded with data. Obviously, this was not acceptable. I did a code review and got the load time down to a consistent 2 seconds. 

Here's what I found:  
1) Web Service calls are sloooooow. That includes calls to Web Services on the Sharepoint server for things like User Profiles.   
2) File Attachments = Death. Any file that you attach to your Infopath form is stored as encoded text within your form. That means if you have a 5MB Word Document attached, your Infopath document is suddenly 5MB bigger. That leads to:  
 3) Post Back events make your form look slow. This is because every time you fire a post-back event, a copy of your form is uploaded to the server…your action is performed…and an updated version of your form is downloaded from the server. If your form is full of attachments, you can imagine how slow this can become. Even if your form isn't large, you're still looking at a half-second during which your form is locked up.

The fixes I implemented on my form were:  
1) Get rid of all Web Service calls. Those Web Service calls I couldn't eliminate I hide by putting them into View Changes when the user is already expecting a short wait. I eliminated all Web Service calls from my On-Load events.  
 2) Move file attachments outside your form. All my attachments are now stored in a separate Document Library. My Infopath form contains links to the files which are displayed to the user as clickable links.  
3) Combine multiple Post Back events instead of firing them one at a time. I did this by using Views to create a Wizard type interface. Users select several Radio Button options but my post back doesn't fire until they click a Next button at which point I do all my processing at once. 

In my following posts I'll give examples for each, including the code I'm using. First up will be how I replaced my call to the User Profile web service.

