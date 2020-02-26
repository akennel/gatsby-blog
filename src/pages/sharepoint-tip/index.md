---
title: Sharepoint tip
date: 2008-04-07
---

Some good did come of last week’s disaster. I learned a great deal about Sharepoint internal workings. One handy tip I picked up was a way to get to the WebParts running on a page, even if that pages is down. Just add ?Controls=1 to the end of your URL, for example: http://site/Pages/default.aspx?Controls=1 This takes…


<!-- end -->

<span style=";font-family:Times New Roman;font-size:100%;">Some good did come of last week’s disaster. </span> 

<span style=";font-family:Times New Roman;font-size:100%;">I learned a great deal about Sharepoint internal workings. One handy tip I picked up was a way to get to the WebParts running on a page, even if that pages is down. Just add ?Controls=1 to the end of your URL, for example: </span>[<span style=";font-family:Times New Roman;font-size:100%;color:blue;"><u>http://site/Pages/default.aspx?Controls=1</u></span>](http://site/Pages/default.aspx?Controls=1)<span style=";font-family:Times New Roman;font-size:100%;"> This takes you to a page which lists all the Web Parts running on the default.aspx page. You can then close the Web Part, or if necessary, remove it from the page completely.</span> 

<span style=";font-family:Times New Roman;font-size:100%;">Last week was also a reminder to me that I’m not in Domino-land anymore. One of the really nice things about Domino is that each element is a separate database. It’s very hard to take down a Domino server. For the most part an error in one database will not affect any other database. Sharepoint is much more interconnected. This makes it very powerful, but also fragile. It seems that a failure in any part of Sharepoint will take everything down.</span> 

<span style=";font-family:Times New Roman;font-size:100%;">I’m probably just overly sensitive after spending a nightmarish week trying to patch things back together, but I can’t shake that feeling that the whole thing is held together with string and good intentions.</span>

