---
title: Fixed major bugs in my Domino to Sharepoint (Infopath) migration tool
date: 2008-03-13
---

I spent a good portion of the day today fixing the bugs in my import tool. When I started, I knew of 2 major bugs.The first was that the field information was being updated with a few extra characters. I was able to quickly track this down to the string.Substring parameters being off. That was…


<!-- end -->

I spent a good portion of the day today fixing the bugs in my import tool. When I started, I knew of 2 major bugs.  
The first was that the field information was being updated with a few extra characters. I was able to quickly track this down to the string.Substring parameters being off. That was an easy fix.  
The second bug was something I’d noticed when I ran my first working version against a full CSV. The application bombed out after creating about 1,100 of the 1,250 files. When I ran the app again under the debugger, I could see that one of my file names had a / in it. Windows interpreted this as a directory name, and bombed when it couldn’t find the file. I added some code to remove / and from filenames.

Everything seemed great at that point, so I brought over S to show off what I’d done. When I’d run my tests, I was mapping every field so I could verify that everything was written correctly. To save time when showing it to S, I mapped the first few fields and left the rest unmapped. Disaster! The files generated, but they weren’t valid XML. Looking into the file with Notepad, I could see that the same field value was being plunked into every line.

Long story short, I found a major flaw in my logic. I had been searching for matches by taking the name of the mapped XML tag — say CompanyName, putting a > at the end, and searching for matching text in the current line of my file.  
So, it searches the current line for “CompanyName>” when a match is found, I do some fiddling with the string and <?xml:namespace prefix="myfields"?><myfields:companyname>insert my new data.  
The trouble was, I did the same check every time, so if the XML tag was blank, I would search for the matching text of “>”. Of course, I found a match every time.  
Simple solution was to do my search only if the XML tag name wasn’t blank.<p> <p>I now have a working application which, as far as I can tell, doesn’t have any outstanding bugs. That is to say, it does what I expect it to do. The application is still as ugly as sin, with field names overlapping, and a giant window that stretches to fill the entire screen. Tomorrow I’ll work on prettying it up.</p> <p>You can download the current version here: [http://code.msdn.microsoft.com/CSVtoInfopathTool](http://code.msdn.microsoft.com/CSVtoInfopathTool)  
</myfields:companyname><myfields:companyname></myfields:companyname>

