---
title: We had some trouble with Sharepoint this week
date: 2008-04-04
---

On Tuesday, the site stopped responding. Eventually I was able to track the problem down to an authentication problem ultimately caused by a loose network cable of all things. It was very unfun, and the server went down for about 5 to 10 minutes at a time 5 times while I struggled to fix things….


<!-- end -->

On Tuesday, the site stopped responding. Eventually I was able to track the problem down to an authentication problem ultimately caused by a loose network cable of all things. It was very unfun, and the server went down for about 5 to 10 minutes at a time 5 times while I struggled to fix things. At one point, the account that Sharepoint uses to run its services was locked out by the Domain.  
Eventually we got everything sorted out, and the servers were back to normal.

Or so I thought. On Thursday, D uploaded a new DLL for a Web Part he’s been building. He then cycled IIS on each of the web front end boxes. Disaster!

This time the servers were responding to HTTP requests, but showing an error page complaining about web.config. I assumed we were having a repeat of Tuesday’s problems, but quickly eliminated that by checking the servers and logs. I called up Microsoft, and spent the next 4 hours on the phone with them.

In the end we managed to get the servers back up without losing any data. We had to rebuild two of our pages that were using custom Web Parts. These Web Parts had to be removed from the server (stsadm -o deletesolution -name WebPart) and then readded before they could be coaxed back into life. Ironically, D’s Web Part was not affected by all this.

So, I had a very unpleasant week. I’ve spent the day trying to document exactly what happened, and explain to everyone why we had 4 hours of down-time on a supposedly fully redundant server farm. To top it off…I still don’t know what happened! I’ve shipped copies of the server logs off to Microsoft, and hope to hear back from them sometime next week.

I’ve come away from the experience with a new found respect for the techs at Microsoft support. I was not in a very good mood when I called for help, and it was nice to have someone calm and competent to talk to. As part of closing the ticket, my tech forwarded his notes on the issue. I’m attaching them below, because I thought it was interesting to see how we repeatedly tried to fix the problem, failed, and tried again with a different approach. In the end, we created a new Web Site in IIS and extended the Sharepoint site into that. Once that was working, we swapped the Ports used by the IIS Web Sites so our newly extended site responded on Port 80. It was a clever fix, and one I never would have thought of myself.

Notes from this problem. I made the initial call at 11:30am and was on the call until around 4pm. After that I spent another hour and a half re-installing Web Parts and rebuilding the two broken pages.

– Followed KB 934838 as below

– On Central Admin Server stsadm -o updatefarmcredentials -userlogin  
DomainName UserName -password NewPassword > Successful

– On other 2 WFEs stsadm -o updatefarmcredentials -userlogin  
DomainName UserName -password NewPassword -local > Successful

– IISRESET /noforce on 3 servers

– Administration Application Pool Credential Deployment job definition  
is still displayed on the Timer Job Definitions page > Waited for 5  
minutes

– Waited for 5 minutes; job is still there

– Delete the job and try the command again

– stsadm -o execadmsvcjobs

The job failed with the following error. This job will be skipped.  
There was an error encrypting or decrypting credentials. Either a  
credential update is currently being performed, or you must update the  
farm account credentials on this server before you can perform this  
task.

Operation completed successfully.

– We see a lot of 7076, 6398 and 6482 it refers to KB 946517

– Installed HotFix from KB 946517 on all 3 servers

– Reboot all 3 servers

– Administration Application Pool Credential Deployment job still  
present in Timer Job Definitions > deleted the same

– Typed in the credentials manually for the application pool for port  
80 web app on both WFEs > Recycle app pool

– Try to access the site > same issue

stsadm -o deleteconfigurationobject -id <GUID>

– Did the credential deployment again; still Administration  
Application Pool Credential Deployment job gets stuck

– Did an extend web app at port 101

– Tried to browse; page cannot be displayed

– Web application has not even propagated to other WFEs

– Restarted timer service

– Tried to browse to site/_layouts/settings.aspx > Same error

– Created a new web application > successful

– Went to web application list > it does show the new web application

– Even the new web application has not propagated to IIS of other WFEs

– We have the new web site in IIS of Central Admin server; CA server  
is not in the load balancer but it has the web application service  
started

– Created a site collection; try to browse it > page cannot be displayed

– Try to do localhost:102 from Central Admin server > page cannot be displayed

– Running PSCONFIGUI on Central Admin server, WFE1 and WFE2 > Successful

– Changed the CustomErrors to Off on WFEs and Central Admin server

– IISRESET

– Browse to the site; we see the error message as below now

Server Error in ‘/’ Application.

– Confirmed we are not running AdminSecure 2006 on the server

– On Central Adminpsconfig.exe -cmd services -install and psconfig.exe  
-cmd services -provision > Successful

– On WFE2 Adminpsconfig.exe -cmd services -install and psconfig.exe  
-cmd services -provision > Failed to register SharePoint services

– On WFE1 Adminpsconfig.exe -cmd services -install and psconfig.exe  
-cmd services -provision > Failed to register SharePoint services

– Suddenly the test application got provisioned!

– We again did extend to another web application at port 103

– It didnt provision

– We forced it by stsadm -o execadmsvcjobs on all servers

– It created the web applications on other servers this time

– We are able to browse to the site but the home page is erroring out  
due to custom webparts not able to open

– We tried to close and delete the webparts > same issue

– We copied over the web.config from original web application to newly  
extended web application

– Try to browse > web part error

– Opened the site in web folder view and took a backup of default.aspx  
and replaced it with a working one from a subsite > successful

– Opened the site > successful with totally changed layout as we dont  
see any custom webparts etc..

– Andrew checked the other subsites etc… its coming up

– Andrew said we need to get the site working by original port and host header

– We stopped both old and new sites on all servers

– Interchanged port numbers and host headers between old and new web  
applications

– We redeployed and reconfigured custom webparts using stsadm  
addsolution and stsadm deploysolution

– stsadm -o execadmsvcjobs on all servers

– Now we are able to see the web pages correctly

– Replaced defaultold.aspx to default.aspx again on site home page

– We are not able to delete the defaultold.aspx page

– Tried to delete from SharePoint designer and came to know thats the  
welcome page hence we cant delete it

– Changed the welcome page to default.aspx from defaultold.aspx and  
deleted defaultold.aspx

– Tried browsing the home page with original default.aspx > site comes up fine

– They have 403 forbidden error on stock quote webpart and we had to  
close news web part (it is not a WSP file and its a DLL so I couldnt  
deploy it)

– So apart from above 2 web parts everything is back in place

