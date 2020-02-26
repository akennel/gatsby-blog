---
title: Bug fix for Migration Tool uploaded
date: 2008-10-13
---

I wrote a CSV to Infopath migration tool ages ago and posted it to Codeplex.  At the time, I'd been tasked with migrating a Notes database to Sharepoint, and came up with an idea that I could dump the Notes database to a CSV file and rig together a tool to generate Infopath files based…


<!-- end -->

<div dir="ltr">I wrote a CSV to Infopath migration tool ages ago and posted it to Codeplex.  At the time, I'd been tasked with migrating a Notes database to Sharepoint, and came up with an idea that I could dump the Notes database to a CSV file and rig together a tool to generate Infopath files based on that.  I spent a couple of weeks working on it after hours, and came up with something that worked.


 Barely.

Then, the project went onto the back-burner, and we decided to go with the Notes to Sharepoint migration tool that Quest software makes.  I forgot about the project, and abandoned working it. 

Last week, VP asked me about the original project that started all this.  I told him that the original site I'd built was gone, as I'd not migrated it when we moved our test server to new hardware.  He told me to rebuild the site, which I was quickly able to do, as I'd saved the Infopath templates I'd originally created.  I then fired up my migration tool, and found that….it was better than I'd remembered.  

Don't get me wrong, it's a fairly limited tool (no file attachments, repeating field support is iffy at best) but it was very simple to use, and I was quickly able to migrate the 2,000 or so records from the database over to Sharepoint.  I then looked at the Codeplex site and discovered, to my surprise, that I had over 80 downloads.  I also had a bug report from early September that I hadn't noticed.  

I quickly reproduced the bug, and wrote a fix for it.  I've just posted this new version.  I've also decided that the tool is good enough that it deserves some more work.  I'm going to rewrite it to get rid of some of my more atrocious design flaws.  For example, I'm currently writing every file twice.  The first time, writes a copy of a blank file.  I then read the file I've just written, edit it, then write it again, replacing the original file.  Yes, I'm aware now that this is completely insane.

So, I think I have the makings of a pretty good, and valuable tool.  The foundation isn't the best, but I should be able to rework that pretty easily.  The basic approach and interface are pretty good though, I think.  I don't think I'll ever be able to handle file attachments, but for simple migrations, this could be a very useful bit of software.

If you want to download the current version, it's available at [http://www.codeplex.com/csvtoinfopath](http://www.codeplex.com/csvtoinfopath)


