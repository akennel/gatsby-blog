---
title: List Templates and Custom Types
date: 2008-06-05
---

For a little over a week, I've been working on a site called Sentinel Events.  The purpose of this site is to record some events for facilities, and send out a notification to a list of people each time a new event is created. I originally created a custom workflow to send out these notifications,…


<!-- end -->

For a little over a week, I've been working on a site called Sentinel Events.  The purpose of this site is to record some events for facilities, and send out a notification to a list of people each time a new event is created.  
 I originally created a custom workflow to send out these notifications, but for one reason or another changed my mind and decided to use the built-in Alert option instead.  Because Alerts can't be configured to pay attention to folders, I need to create a List for each facility.  This led me to work with List Templates:  basically you create a list and get it set up the way you want, then save the list as a template.  Now you can quickly stamp out duplicates of this first list using the template.  
 There is one big drawback to this approach: if you ever need to change something about your lists, you have to manually update each list with the change.  There's no way to change the List Template and have that change push out.  
 That led me to Custom Types.  This lets you define a document type by setting your fields, setting the order, toggling whether the field is required, etc.  You can then require your list to use this custom type when creating new documents.  Now here's the fun part…if you update your custom settings, all the documents that were created using the template are updated automatically.

