---
title: Server Crash Cause Found!
date: 2008-05-07
---

At long last we've found the cause of April's crash.  If you remember, early in April, D added an updated DLL to the web front end boxes and ran an IISReset.  When IIS came back up, the portal was inaccessible. I called Microsoft, and after struggling for about three hours, we were able to get…


<!-- end -->


At long last we've found the cause of April's crash.  If you remember,  early in April, D added an updated DLL to the web front end boxes and ran an  IISReset.  When IIS came back up, the portal was inaccessible.
I called Microsoft, and after struggling for about three hours, we were  able to get the site back up by creating a new Web App, extending the Site, and  then changing the Port of the new Web App to 80.  It was an ugly afternoon, but  we got the site running and called it a day.
 
Ever since, I've been working with Microsoft to try and figure out what  went wrong.  Today we finally have an answer.  A copy of  Microsoft.Sharepoint.Search.DLL that was located in the Web Apps bin directory  was broken.  I'd left the original, broken Web App on the servers (in a stopped state).   We were able to move the Web App to a new Application Pool to segregate it from  our production site and bring it back online.  Removing the DLL fixed the  problem. 
 
So, that's great.  Now I know what caused all the heart-ache in the first  place.  The new mystery is what happened to that DLL?
A look at the file shows it to be the same version as the DLL in the GAC.   A close comparison of the file sizes, however, suggests that it is the 32bit  version of the file — all our production servers are 64bit. Apparently there's no easy way to tell if a DLL is 32 or 64 bit short of poaking around with a hex editor.
 
So, where did this 32bit version of the file come from?  There are only two  plausible possibilities:
1) Someone copied the file from our test server, overwritting the 64bit  file.  D was copying files into the bin directory that day, but he says he  copied only his own custom DLL.  I believe him.  Of the other people who had  access to the server, none had any reason to copy files.
2) A server patch updated the file with the wrong version.  This looked promising at first.  There was a  patch installed on April 1st.  And the patch was was for IIS.  But, a look into the KB article about the patch  shows that it didn't contain the DLL in question.
 
So, I'm pretty sure we're looking at #1 — especially when you consider that the broken file appeared on both Web Front End boxes.  The question now becomes, is it worth  finding out who copied the file?  The damage is already done; the lesson has  been learned. We've already changed the process for updating DLL files on  the server.  At this point, I think I'm going to let sleeping dogs lie, and just  be happy that I have an explanation for what happened.

