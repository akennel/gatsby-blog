---
title: Wrote a new utility over the weekend
date: 2008-10-27
---

This isn't something I'm going to post to Codeplex because it is just too specialized. We're currently using a tool from Quest software called Note Migrator for Sharepoint.  It helps you migrate data from Notes databases to Sharepoint sites.  One of the features allows you to import directly into Infopath forms. Unfortunately, with Infopath migrations,…


<!-- end -->

This isn't something I'm going to post to Codeplex because it is just too specialized.

<div>We're currently using a tool from Quest software called Note Migrator for Sharepoint.  It helps you migrate data from Notes databases to Sharepoint sites.  One of the features allows you to import directly into Infopath forms.</div>
<div></div>
<div>Unfortunately, with Infopath migrations, you first need to build an XML document which includes lots of tags like: <ppm:replace src="AttachmentsAttachments" encode="attachment"  />.  There's a different tag for every type of field.  The first file I built took me about an hour, not because it is difficult, but because of all the tedious copy/paste/edit routine involved. </div>
<div></div>
<div>This weekend, I built a little utility to help make the task easier.  It reads in all the Infopath XML tags, and displays them alphabetically.  You then select the field type for each, and enter the corresponding Notes field name.  When you have everything filled out, the utility generates the XML document for you and displays it so you can check it for errors.  If there's a problem you can adjust your entries until everything looks right.</div>
<div></div>
<div>Today I tried it out, caught a few bugs that I'd missed over the weekend, and eventually was able to run a full import using the XML it generated.  There's still a lot of copy/pasteing involved, but I'm much faster now.  Since we have something like 70 applications to migrate, every improvement helps.</div>

