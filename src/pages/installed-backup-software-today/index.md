---
title: Installed Backup software today
date: 2008-01-24
---

E and I installed the backup software today on the Apps server. The backup software allows us to backup/restore as much or as little of the site at a time that we want. Reading through the manual, it does support automated backups–sort of. What it does is create a batch file via a GUI interface….


<!-- end -->

<div>E and I installed the backup software today on the Apps  server.  The backup software allows us to backup/restore as much or as little of  the site at a time that we want.</div>
<div> </div>
<div>Reading through the manual, it does support automated backups–sort of.   What it does is create a batch file via a GUI interface.  Once the batch file is  created, it adds a task to the At scheduler in Windows that kicks off the file.   Lame, but workable.</div>
<div> </div>
<div>My current plan is to run a full backup every Saturday, and incremental  updates every other day of the week. </div>
<div>I’ll need to work with E to get tape copies created, as well as OS  backups of each of the 5 servers in the farm, and a SQL backup.</div>

