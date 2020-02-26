---
title: Finally got our Dev server restored
date: 2008-04-23
---

D had asked me to rebuild the Test Server a few weeks back.  He was having some trouble with one of his applications, and we thought it might have been caused by installing the .Net 3.5 framework.  This wasn't the case, but the Test server has been with us from the very beginning and had…


<!-- end -->


<div>D had asked me to rebuild the Test Server a few weeks back.  He was  having some trouble with one of his applications, and we thought it might have  been caused by installing the .Net 3.5 framework.  This wasn't the case, but the  Test server has been with us from the very beginning and had built up some  cruft over time, so a rebuild seemed like a good idea.</div>
<div> </div>
<div>My first attempt to just uninstall Sharepoint and .Net 3.5 failed, so after  some debate, I formatted the drive and started fresh.  After a bit of hunting  for network drivers (HP, why don't you just make them available for download?) I  had the box up and running.</div>
<div> </div>
<div>To save time, I did a Full install of Sharepoint, which uses SQL Lite, and  has everything preconfigured.  When I tried to restore, the process kept failing  with the error: "Your backup is from a different version of Windows SharePoint  Services and cannot be restored to a server running the current version. The  backup file should be restored to a server with version  '1836597052.1702240364.1869181810.824327' or later."</div>
<div> </div>
<div>I opened a case with Microsoft, and together we eventually determined that  this error had nothing to do with the Sharepoint version, it was a simple file  access error.  I made the backup files available via a network share that was  fully accessible to all, and that problem was solved.  Next up, Sharepoint  complained about being unable to create a content database.  </div>
<div> </div>
<div>So, I uninstalled Sharepoint and SQL Lite, then reinstalled a full version  of SQL along with Sharepoint.  This time, everything worked.  I got my original  sites restored, and aside from a few 3rd party Web Parts that need to be  installed, everything is working.</div>

