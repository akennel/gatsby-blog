---
title: Search changes
date: 2008-03-31
---

After my recent class at Mindsharp, I've made a few changes to the waysearch indexing is currently running. The class was focused on the newSearch Server 2008, but happily, most of the information applied toour current search services for MOSS 2007. Based on what I learned, I adjusted our crawl schedule to run a fullcrawl…


<!-- end -->

After my recent class at Mindsharp, I've made a few changes to the way  
search indexing is currently running. The class was focused on the new  
Search Server 2008, but happily, most of the information applied to  
our current search services for MOSS 2007.

Based on what I learned, I adjusted our crawl schedule to run a full  
crawl only once per month instead of daily.  
I also adjust the indexer to use all web front end boxes to index the  
Sharepoint sites instead of running on a dedicated server which is how  
I'd had it running. My reason at the time was to confine the crawl  
impact to a single server, therefore not impacting the performance on  
the Web Front End boxes. This was good reasoning as far as it went,  
but it turns out that the biggest impact is actually on the SQL server  
backend–which gets hit just as much regardless of how many servers  
are doing the crawling. In the end, using all our Web Front End boxes  
to index is quicker, which frees up the SQL server sooner.

