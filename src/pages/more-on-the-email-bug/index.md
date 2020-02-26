---
title: More on the email bug
date: 2008-02-15
---

I opened a case with IBM today. I explained the problem we were seeing, and forwarded them a copy of the problem message. I showed them the work-around I found and they verified that everything worked as I described it in their own test server. As expected, they’re blaming it on Microsoft. I insisted that…


<!-- end -->

I opened a case with IBM today.  I explained the problem we were seeing,  and forwarded them a copy of the problem message.  I showed them the work-around I found  and they verified that everything worked as I described it in their own test  server.
 
As expected, they’re blaming it on Microsoft.  I insisted that they keep  the ticket open, and investigate creating an agent for the mail.box that will  strip out the extra lines causing all the trouble.  Also as expected, they don’t  advise that approach because it will kill mail routing performance.
 
Next step is to open an issue with Microsoft.  I’m 99% certain that there’s a bug in the notification code, so this should be a simple fix.  I would have called Microsoft first, but we share our support contract with the networking team, and they are very jealous of the time.

I just hope I’ve done enough ground work to justify opening a case with MS.

