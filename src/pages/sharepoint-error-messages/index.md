---
title: Sharepoint Error Messages
date: 2008-05-14
---

Why are Sharepoint error messages so useless? I had a user who was trying to approve a workflow task. Every time she tried to open the task to approve it, the web site shot back an error message starting with “Value does not fall within the expected range. at Microsoft.SharePoint.SPList.GetItemById(Int32 id, String strRootFolder, Boolean cacheRowsetAndId)”….


<!-- end -->

Why are Sharepoint error messages so useless? I had a user who was trying to approve a workflow task. Every time she tried to open the task to approve it, the web site shot back an error message starting with “Value does not fall within the expected range. at Microsoft.SharePoint.SPList.GetItemById(Int32 id, String strRootFolder, Boolean cacheRowsetAndId)”. Similar text filled the rest of the screen.  
In the end, it turned out to be a simple permission problem — the user didn’t have Approver access to the Library. That’s it. About the simplest problem in the world. But nothing in the error message said anything about an access error, or insufficient rights. Bad Microsoft, no cookie.  
And while I’m thinking about it, it would be very nice if the Workflow checked to see that a person had Approver rights to the Library before they were added as an approver.

