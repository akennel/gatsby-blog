---
title: Interesting workflow problem
date: 2008-06-24
---

One of our users complained about not getting email notifications when a document was waiting for her approval today.  I looked at the workflow in question, which was a simple canned approval workflow and noted that her name was listed correctly.  To be on the safe side, I removed her entry, then readded her.  I…


<!-- end -->

One of our users complained about not getting email notifications when a document was waiting for her approval today.  I looked at the workflow in question, which was a simple canned approval workflow and noted that her name was listed correctly.  

To be on the safe side, I removed her entry, then readded her.  I then saved my change, and created a test document — no email.  I checked the Task list used by the workflow, and saw that my document was listed, and had the user listed as the approver.  I then looked at User Alerts and saw one listed for the user.  I deleted the existing Alert, and then created a new one.  

As soon as I tried to add the user's name to the Alert, Sharepoint popped up an error saying that the user didn't have an email address.  Aha!  I pulled up her account in Active Directory, and sure enough, the email address was blank.  A quick call to our help desk got her account updated.  
 Now I just need to wait for Shared Services to run it's nightly incremental import.

