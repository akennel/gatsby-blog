---
title: Backup software is working
date: 2008-03-14
---

I finally got the backup software we purchased from EMC months ago working. I’d been working with tech support at EMC. Early on they had focused on the customized theme that we’d been using for our look and feel.Turns out they were right. The consultants who created the theme for us, and rolled it out…


<!-- end -->

I finally got the backup software we purchased from EMC months ago working. I’d been working with tech support at EMC. Early on they had focused on the customized theme that we’d been using for our look and feel.  
Turns out they were right. The consultants who created the theme for us, and rolled it out to our servers, got 2 out of the 3 servers set up correctly, and completely botched the 3rd machine. That third machine had no entries for the custom theme in the SPThemes.XML file, and was missing several graphic files in the theme folder.  
Once I corrected these mistakes, the backup software ran normally. I’m now very happy to have document level backups available. To test, I did a backup of all our MySites, deleted a couple of items from my Shared Documents folder, and then restored the deleted files. It all seemed to work perfectly.  
I’ve scheduled a full backup of the Portal site and MySites to run every Sunday. MySites at 5:00am, Portal at 6:00am. I’ve also scheduled incremental updates to run every day at 5:30am and 6:30am. This backup tool uses the built-in Windows scheduler so it’ll be easy to adjust these schedules.  
I’m honestly not sure yet how the software handles rotation. I’m going to let things run for a week, and then decided on a rotation schedule.  
I don’t completely trust this new software, so I’ll continue running my stsadm -o backup scripts for the next few weeks/months. We have plenty of storage space on the server to keep both sets of backups.

