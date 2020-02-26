---
title: Tracking down an email bug
date: 2008-02-14
---

We’re currently a Lotus Notes shop for email. Normally Notes and Sharepoint get along fairly well, but I’ve run into a problem. When a user submits a document that kicks off a workflow, the system emails them a notification message. This message lets the user know what is happening and provides a link to the…


<!-- end -->

We’re currently a Lotus Notes shop for email. Normally Notes and Sharepoint get along fairly well, but I’ve run into a problem.

When a user submits a document that kicks off a workflow, the system emails them a notification message. This message lets the user know what is happening and provides a link to the workflow so the user can track its progress. These messages are coming through in raw text. 

Instead of seeing:  
<span style="font-size:85%;">Test has started on uhs-mainnav-outer-left.  
Participants are ANDREW KENNEL  
Each person will receive a task to approve uhs-mainnav-outer-left. The tasks will be assigned one at a time in the order shown above.  
View the status of this workflow.</span>

They are seeing:  
TABLE.mail { border-style:none; border-collapse:collapse; font:8pt Tahoma; width:100%; }TD.header { background:#F8F8F9; border:1px solid #E8EAEC; padding:12pt 10px 4pt 10px; }TD.body { padding:12pt 10px 24pt 10px; }TD.footer { border-width:1px; border-style:solid none none none; border-color:#9CA3AD; padding:4pt 10px 4pt 10px; }A { text-decoration:none; }DIV.title { font:16pt Verdana; }DIV.headertext …..etc, etc.

At first, I thought this was happening because the messages were missing the HTML header tags. So I tried adding the tags to the messages and sending them manually by telneting into our mail server. No luck.

After playing around for a bit, I found that I could get the message to appear correctly as long as the first line of the message was not blank. I think I’ve found a bug in Sharepoint that is inserting a blank line at the top of these messages. I’m guessing here, but I think Exchange strips off this blank line and dispays the message correctly. Notes does not strip the blank line, and so displays the message as raw text. That would explain why I can’t find mention of this error affecting anyone else.

That doesn’t tell me how to fix the problem, of course. I’ll have to go through MS to get a bug fix, or convince IBM to create a fix for Domino.

Incidentally, this only affects the notifications messages sent to the person submitting the document. All other notifications (Please approve, Your document has been approved, etc) come through correctly. That seems to bulster my idea that Sharepoint is unintentionally padding an extra space at the top of the message.

