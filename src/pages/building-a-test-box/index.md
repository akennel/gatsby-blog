---
title: Building a test box
date: 2008-06-03
---

I was thinking this afternoon, as I built what seems to be the 50th version of our test box, that Microsoft is really going out of their way to make my life difficult. This is partly my fault, as I’ll get to later, but consider the steps required to build a Sharepoint Development environment. First,…


<!-- end -->

I was thinking this afternoon, as I built what seems to be the 50th version of our test box, that Microsoft is really going out of their way to make my life difficult. This is partly my fault, as I’ll get to later, but consider the steps required to build a Sharepoint Development environment.

First, you pretty much have to develop for Sharepoint on a Sharepoint server; You cannot do any testing unless you’re on a server, for instance. Annoyingly, MS won’t let you install Sharepoint on XP or Vista, you must install on Windows Server. So, to get a dev server up requires the following steps:  
1) Install Windows Server 2003. Standard or Enterprise, your choice. Don’t install 64bit though, some of the SDKs you’ll want to use won’t install on 64bit.  
2) Patch your new Windows machine up to Service Pack 2 and install all the various fixes and security patches — over 50 by my last count.  
3) Install .Net 2.0 and 3.0.  
4) Install service packs for .Net 2.0 and 3.0.  
5) Install SQL Server 2005. (I wish I could use SQL Lite for my dev box, but I’ve been unable to restore a Sharepoint backup that was running on a SQL Server install to a SQL Lite server. MS’s advice: install SQL Server)  
6) Install service pack for SQL Server.  
7) Install Sharepoint Server 2007. Hooray! But we’re not done yet.  
8) Install WSS Service Pack.  
9) Install Sharepoint Server service pack.  
10) Configure your Sharepoint server — Shared Services, Enable all the services, set up searching, etc.  
11) Install Visual Studio.  
12) Install Visual Studio service pack.  
13) Install Sharepoint Designer.  
OK! You now have a working, blank Sharepoint dev machine. But you probably want to bring over some of your existing site, right? Custom master pages, Web Parts, etc?  
Here’s the additional steps that come next for me:  
14) Install the Fab 40 templates from Microsoft.  
15) Install the custom web parts that we had an outside vendor build for us.  
16) Install the web parts we bought from Data Springs.  
17) Either migrate a top level site via stsadm -o import, or restore from backup.

So that gives me 17 steps. I’ve gotten this down to about 8 hours of work. 

The obvious question is why aren’t I doing this on a virtual machine? And the answer is that I am, of course. Months ago I built out nice images and gave them to my developers. Everything was pre-configured and ready to go. They don’t use them. This isn’t their fault exactly, our company is cheap with hardware, so their work machines only have 2GB or RAM. You try to run Visual Studio on top of a Windows Server virtual machine that is also running SQL Server and Sharepoint with only 1GB of RAM for your virtual environment. 

The same cheapness limits my dev server class machines to 2GB. The only way to make performance good enough is to run them in a real environment. I’ve been tempted to bring in my desktop from home running Linux and virtualizing the dev box on that.

