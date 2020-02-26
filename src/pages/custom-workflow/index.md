---
title: Custom Workflow
date: 2008-06-02
---

VP asked me to create a new site last week.  The actual content of the site was nothing special, just a single document type that didn't even warrant creating an Infopath form.  There was one tricky part: a diagram that specified exactly who should be notified when a new document was created…depending on what folder…


<!-- end -->

VP asked me to create a new site last week.  The actual content of the  site was nothing special, just a single document type that didn't even warrant  creating an Infopath form.  There was one tricky part: a diagram that specified exactly who  should be notified when a new document was created…depending on what folder  the document was created in.
I took a look at the canned workflows that ship with Sharepoint, but none  of them could handle what we wanted to do.  That left me with building a custom  workflow.  Now there are two options here: Sharepoint Designer and Visual  Studio.  Visual Studio custom workflows are coded from the ground up, XML  documents, C# code, the works.  I sat through a 1-day intro class for building this type  of workflow, and to be honest I mostly just remember that it was bewildering and  difficult.  
Since time was a factor that left me with the Sharepoint Designer custom workflow option.  This is  a kind of workflow-light.  If you're familiar with Simple Actions in Lotus  Notes, it's very similar.  You pick from a list of simple actions and conditions like Send  Email and Document Status, and fill in a few parameters.  You can string as  many steps together as you like, but you're limited to simple If/Else type  logic.  Even with these limitations, I was able to get a workflow created to do what we wanted fairly easily.   Then I ran into a snag.
Since my workflow is supposed to notify a group of people that a new document  has been created, the email needs to link back to the new document.  Unfortunately, all of the built-in options to create a URL link don't work.  Let me write that again, all the options that Sharepoint Designer gives you to create a URL link to a document don't work.  They all build slightly different URLs that are supposed to point to the document, but don't actually point to anything.  Oh, and they also don't insert the HTML tags that make the code clickable. 
Eventually I was able to figure out how to build my own URL by hand coding  some HTML and looking up the ID of the current document.  Here's the line of  code that I came up with:
<a  href=[http://server/site/Lists/ListName/DispForm.aspx?ID=](http://server/site/Lists/ListName/DispForm.aspx?ID=)**[Lookup  current document ID]**>Link to Document</a>  
The [Lookup current document ID] is an option that returns the ID number of the current document.  This code should work for any site, just replace server with your server name, site with the name of the site, and ListName with the name of the list you're working with.  This URL will work even if the documents are located within folders on the list. 

