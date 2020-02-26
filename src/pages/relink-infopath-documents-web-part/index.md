---
title: Relink Infopath Documents Web Part
date: 2010-08-13
---

We've been archiving our old documents lately, and we usually do this by moving old Infopath documents to an archive Site. When you do this, you need to relink the Infopath documents to the new Site Collection. Microsoft gives you a tool to do this, the Relink Documents view that's on every Form Library. The…


<!-- end -->

We've been archiving our old documents lately, and we usually do this by moving old Infopath documents to an archive Site. When you do this, you need to relink the Infopath documents to the new Site Collection. 

 Microsoft gives you a tool to do this, the Relink Documents view that's on every Form Library. The problem with this is that you have to select each document manually, and you're limited to 100 documents at a time. There are hacks out there that help with both of these problems, but I wanted something better.

After some searching, I found this project: [http://sprelinkdocuments.codeplex.com/](http://sprelinkdocuments.codeplex.com/) This is a Windows app that can be run on the server. The app asks you for the GUID of the form library. The creator of the script helpfully provided his source code, so I took that and wrapped it in a Web Part.

When you add the Web Part to your site, it checks the URL of the hosting page to see if it is on the Relink view page. If it is, it parses the URL of the page to figure out the name of the Form Library. If it isn't on the Relink view page, it just shows a drop-down menu with a list of all the Form Libraries on the site. 

I've forwarded a copy of my source to the owner of the original project. It should be posted to the Codeplex site soon.

