---
title: Infopath Coding
date: 2009-02-19
---

I've been working on some Infopath forms recently.  We're rebuilding our Purchase Requisition system, which was previously a Notes Database as a Sharepoint site using several custom Infopath forms and workflows.  I've been working on the forms while D spends all his time on the workflows. These are the first fairly complex forms I've built…


<!-- end -->

I've been working on some Infopath forms recently.  We're rebuilding our Purchase Requisition system, which was previously a Notes Database as a Sharepoint site using several custom Infopath forms and workflows.  I've been working on the forms while D spends all his time on the workflows.


These are the first fairly complex forms I've built in Infopath, and have required some extensive code behind.  In particular, I needed to use some web service calls to allow the user to search for groups in our AD by keyword.  Once the matches came back, I then had to allow them to select a match and click a button to add the item to a new row in a repeating table.

And that is what I'd been stuck on for the last two days.  How to add a new blank row to a repeating table to hold my new value.  I'd figured out how to add a new row very quickly, and that worked fine for the first 2 rows.  After that, though, every new row I added resulted in an additional copy of the first row.
So, I ended up with:
Value 1                                  Value 1
Value 1                                  Value 2
Value 1           instead of         Value 3
Value 4                                  Value 4

It was very frustrating.  I searched all over, and found several different approaches, and couldn't get any of them to work.  Finally, I stumbled on this [discussion](http://www.infopathdev.com/forums/t/8172.aspx?PageIndex=3).  And there was my salvation.
All I had to do is make sure that I used the .InsertBefore option, and then cleared my field values <span style="font-style: italic;">after </span>I added the new row to the table, not before.

So, I after 2 days of banging my head against my desk, my solution turned out to be swapping the order 2 lines of code, and changing  .InsertAfter to .InsertBefore.

