---
title: Working on CSV migration application
date: 2008-03-10
---

When VP first asked me to recreate our OpenLink application in Sharepoint, I knew that I wanted to be able to migrate existing Domino documents into Infopath forms. Microsoft supplies a tool for Sharepoint that migrates Domino apps, but that tool will only export information into a list. Lists are nice, but they don’t allow…


<!-- end -->

When VP first asked me to recreate our OpenLink application in Sharepoint, I knew that I wanted to be able to migrate existing Domino documents into Infopath forms. Microsoft supplies a tool for Sharepoint that migrates Domino apps, but that tool will only export information into a list. Lists are nice, but they don’t allow any form layout, or code with the form.

For OpenLink, I ended up creating a rather complex Infopath form, that mirrored the form used by the Domino application. I decided that I would create an application to migrate a CSV export of the Domino data into XML Infopath documents. I got as far as creating buttons that allowed the user to select the files. After that, I ran into the wall that was my complete ignorance of C#.

The application sat on my machine for the last few months, and I moved onto other things. Now I’m taking another look. With the experience I gained building the Wake Up script, I’ve been able to make some more progress. The app currently is able to read the CSV file and store the elements into an array. I’m working now on getting the XML fields read in.

This is where I’m running into another wall of ignorance. I’ve worked with XML files for years, but only in the sense that I’ve editted existing documents, or peaked inside to find some information. I’ve never needed to know them well enough to actually create them from scratch. So, I’m currently reading up on XML files.

(Part of me wants to just read the Infopath files as plain text, and just set my tags manually. A brute-force approach, if you will. I’m sure I could get this to work without too much trouble, but it’s not elegant. I want to do this the right way.)

Once I have this application built, I think it’s going to be very useful. As invisaged, it will allow you to migrate data in a CSV file into an XML form. I’ve been assuming the the data would come from Domino databases, and the form would be an Infopath document, but there’s no reason they have to be. In theory, any CSV data or XML document would work. Once I get it running, that is.

