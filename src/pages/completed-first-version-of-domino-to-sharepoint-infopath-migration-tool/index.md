---
title: Completed first version of Domino to Sharepoint (Infopath) migration tool
date: 2008-03-12
---

I’ve got a working application now. Still to do:1) The interface is a bit rough. Fields overlap, and I need to make 2 columns in order to keep the window size reasonable.2) My first import of all the OpenLink documents died about 1,100 documents in to the full 1,300 document list. Not sure what happened…


<!-- end -->

I’ve got a working application now. Still to do:  
1) The interface is a bit rough. Fields overlap, and I need to make 2 columns in order to keep the window size reasonable.  
2) My first import of all the OpenLink documents died about 1,100 documents in to the full 1,300 document list. Not sure what happened there.  
3) Need to do some clean-up of file names. I think I’ll strip out spaces, and maybe other control type characters.  
4) Check on the code that writes the values. I may be adding extra characters.

So, we’re not perfect yet. But of the 1,100 documents that did import, they seemed about 90% there. Just a few tweaks to make sure I get all the information in correctly, and then I need to beautify the interface. The heavy lifting is done.

You can download a copy here: [http://code.msdn.microsoft.com/CSVtoInfopathTool](http://code.msdn.microsoft.com/CSVtoInfopathTool)

