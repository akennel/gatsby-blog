---
title: Sharepoint Site Restore
date: 2008-06-23
---

I did something today that I've never managed to do before.  I took a backup of a site running on one server, and restored it to a different server.  That should be a pretty basic operation, but it's one I've never been able to do successfully. Truth be told, the restore that I have isn't…


<!-- end -->

I did something today that I've never managed to do before.  I took a backup of a site running on one server, and restored it to a different server.  That should be a pretty basic operation, but it's one I've never been able to do successfully.

Truth be told, the restore that I have isn't 100%.  Two of the web parts aren't functioning, and I'm missing some of the graphics used by the custom Master Page we use.  That said, I am very happy.

 I began by building the server from the OS up.  Once the OS was installed and patched, I installed SQL Server 2005, and then patched it to Service Pack 2.  Then I installed MOSS 2007.  Once MOSS was installed, I immediately patched WSS to Service Pack 1, and then MOSS to Service Pack 1.  

Next I configured the services on my new server, and created a Shared Services provider.  Once that was done, I needed to install the Fab 40 templates, and the 5 custom Web Parts we use on our portal.  All that took about 8 hours of work.

Now I was ready to restore from my backup.  I copied the latest nightly backup from production to my new server.  I then used the Central Admin site to restore from this backup file.  This completed with errors.

 Looking through the error log, the restore process was unable to attach the web site to the content database.  I then tried to attach them using Central Admin and was given an error telling me to use the command line.  I then used the command stsadm -o addcontentdb to attach the site to the database.

That worked, and I was able to partially load the page.  It complained about missing referenced web parts.  My restore had wiped my previous installation of the 3rd party web parts.  I readded the missing web parts (3 by copying the DLL files into the bin and editting the web.config, 2 by redeploying the features).  A quick IISReset and I was in business.

