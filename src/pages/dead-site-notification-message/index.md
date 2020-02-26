---
title: Dead Site Notification Message
date: 2008-07-21
---

VP recently asked me if we had a way to delete MySites after a person had left the company.  This is a question I'd been waiting for, so I already had an answer ready.  I showed him the option that Sharepoint has to find Unused sites and automatically delete them if the sites' owner didn't…


<!-- end -->

<div dir="ltr">VP recently asked me if we had a way to delete MySites after a person had left the company.  This is a question I'd been waiting for, so I already had an answer ready.  I showed him the option that Sharepoint has to find Unused sites and automatically delete them if the sites' owner didn't take an action.

I set up our test server to check for dead sites to generate an example email.  VP noticed that the email suggests that the user can delete the site immediately if so desired, and provides a link to the Site Settings page.  Unfortunately, the option to delete a site is buried with about 30 other commands on the Site Settings page.  If you've never deleted a site before, it can take several minutes to find the option.

After a bit of searching, I found the file that is used to generate the site warning.  It's called DEADWEB.XML and is located under the 12 hive in TEMPLATE1033XML.  The file is just a simple XML, and I was quickly able to find the text of the message that gets sent out.  I edited the following line for clarification:  "If the site is not being used, please go to SITE, and select "Delete This Site" to remove the Web site. This is the last option listed under the Site Administration column."

The notices should run again tonight.  We'll see if my change works as expected then.

