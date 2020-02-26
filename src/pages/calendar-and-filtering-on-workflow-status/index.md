---
title: Calendar and Filtering on Workflow status
date: 2008-06-10
---

Several months ago I created a Change Management app for our Help Desk Manager.  He called me over today because he couldn't find a linked document.  It turned out the document was just hiding in a sub-folder.  While I was at his desk, he showed me the calendar he'd created to track the approved documents….


<!-- end -->

Several months ago I created a Change Management app for our Help Desk Manager.  He called me over today because he couldn't find a linked document.  It turned out the document was just hiding in a sub-folder.  While I was at his desk, he showed me the calendar he'd created to track the approved documents.

After talking to him, I realized that he was manually copying details from the documents once they'd been approved.  I offered to create him a new Calendar view on the existing Library that would filter out unapproved items.  Basically, I'd give him the same calendar without him having to do any work.

I created a new calendar view in the Document Library and set the date fields appropriately.  I then tried to set my filter to show only approved documents.  I'd assumed that I'd set the filter "Is equal to: Approved".  This didn't work, so I hunted around, and quickly realized that although the status column displayed "Approved" or "In Progress" the actual value of the field was a number.  

I was in a bit of a hurry, so I figured out the values of the numbers by trial an error.  Later, I found that you can see the values directly by create a Datasheet view.  There's also a list of the values here: [http://www.sharepointblogs.com/dwise/archive/2006/12/11/howto-filter-a-view-based-on-workflow-status.aspx](http://www.sharepointblogs.com/dwise/archive/2006/12/11/howto-filter-a-view-based-on-workflow-status.aspx)

For the record, Approved = 16.

