---
title: Stock Quote formatting
date: 2008-02-29
---

I took a look at the code behind the stock quote Web Part yesterday. I noticed that the text was formatted with HTML tags, and wondered if there was anything I could do to improve the formatting. A quick look at the vendor’s web site, turned up a few examples, along with a list of…


<!-- end -->

[![](http://turtlemafia.org/wp-content/uploads/2008/02/stock.png)](http://turtlemafia.org/wp-content/uploads/2008/02/stock.png)I took a look at the code behind the stock quote Web Part yesterday. I noticed that the text was formatted with HTML tags, and wondered if there was anything I could do to improve the formatting.

<div>
<div>A quick look at the vendor’s web site, turned up a few examples, along with a list of available information. I used this to tweak the current display, mostly by adding a % change line.  
I put my change up on the test server and everyone seemed to like it. VP had me put it up on the production box.

We ran into a small problem — I changed the HTML code one too many times, and the stock quote server kicked us off. The public stock server is set to allow so many requests per hour from a single IP. We went over that limit because every time I made a change to the HTML, it requested the stock price from the server. By the next morning everything was back to normal.
</div>
</div>

