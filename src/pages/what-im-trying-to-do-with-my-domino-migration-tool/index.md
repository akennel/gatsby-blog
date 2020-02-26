---
title: What I’m trying to do with my Domino migration tool
date: 2008-03-18
---

A few months ago, VP asked me to look at migrating one of our Notes apps to Sharepoint. He asked me to take a look at an existing database called OpenLink. At the time, I looked at the application, saw that it uses 4 different Notes forms and associated views. I recreated the forms in…


<!-- end -->

A few months ago, VP asked me to look at migrating one of our Notes apps to Sharepoint. He asked me to take a look at an existing database called OpenLink. At the time, I looked at the application, saw that it uses 4 different Notes forms and associated views. I recreated the forms in Infopath easily enough, and created Document Libraries to go along with them.

Dave looked at what I’d done, and pointed out that only 1 of the forms was really complicated enough to justify using an Infopath form. The rest would work much better as simple lists. He was right, of course, so I rebuilt the Sharepoint site accordingly. We now had a good reproduction of the Notes database written as a Sharepoint site. I’ll even flatter myself in saying that the new version looked better:

Notes  
[![](http://turtlemafia.org/wp-content/uploads/2008/03/notesform.png)](http://turtlemafia.org/wp-content/uploads/2008/03/notesform.png)  
 Infopath  
[![](http://turtlemafia.org/wp-content/uploads/2008/03/infopathform.png)](http://turtlemafia.org/wp-content/uploads/2008/03/infopathform.png)

So far, so good. But we still had all that information entered in the existing Notes database, with no way to transfer it to the Sharepoint site.  
Microsoft has a tool for migrating data…but it will only import it into a Sharepoint List. There is no tool to migrate into Infopath. This is where I left my effort for several weeks.

Eventually, I decided that if a tool didn’t exist already, I could make it myself. After a great deal of trouble, and a great deal of assistance from D, I now have a working Notes to Infopath migration tool. The screen shot you’re looking at above is of a file created by this tool. I’ve been able to migrate all 1,268 documents in the Notes database over to the Sharepoint site.

The tool reads in the Notes fields and the Infopath fields, then asks you to map the two to each other. Since the field mapping is selected each time an import is run, we should be able to use this same tool to migrate data from *any* Notes database.  
[![](http://turtlemafia.org/wp-content/uploads/2008/03/migrateform.png)](http://turtlemafia.org/wp-content/uploads/2008/03/migrateform.png)

There are some limitations — the biggest being that file attachments cannot be migrated. And there are some trouble spots — Options selected via radio buttons or check lists may have to be manually adjusted after being imported. But 90% of a document’s fields come over without problems.

