---
title: Setting up a file system crawl
date: 2008-03-31
---

Today I got an AD account from our IS department that had enough permissions to do a file crawl. They asked me to test crawling all the directories located on our department fileshare.This requires setting up two documents. The first setting is the Crawl Source. You access this via your Shared Services Administrative web site….


<!-- end -->

<span style="font-size:100%;">Today I got an AD account from our IS department that had enough permissions to do a file crawl. They asked me to test crawling all the directories located on our department fileshare</span><span style="font-size:100%;">.</span>  
<span style="font-size:100%;">This requires setting up two documents.</span>  
<span style="font-size:100%;"> </span>  
<span style="font-size:100%;">The first setting is the Crawl Source. You access this via your Shared Services Administrative web site. </span> <span style="font-size:100%;">From there, go to Search Settings then Content Sources and crawl schedules.</span>  
![](http://mail.google.com/mail/?ui=2&ik=306df6767f&attid=0.1&disp=emb&view=att&th=1190641a1dd4fe02)  
<span style="font-size:100%;">As you can see from this screen shot, you can set the path and the crawl schedule. <p> <p></span><span style="font-size:100%;">Notice that there’s no where to put account information. For that you need to configure a Crawl Rule.</span>  
<span style="font-size:100%;"> </span>  
<span style="font-size:100%;">Crawl rules are accessed from the Search Settings page, and are the next item below Content Sources. </span>  
![](http://mail.google.com/mail/?ui=2&ik=306df6767f&attid=0.2&disp=emb&view=att&th=1190641a1dd4fe02)<span style="font-size:100%;"> </span>  
<span style="font-size:100%;">As you can see from the screen shot above, this is where you can configure what account Sharepoint uses to crawl the content. Notice also the bit about crawling URLs with ? marks. In this case, we’re crawling a file server, so this doesn’t have any affect. If we were crawling a Sharepoint site, it would ensure that all the subpages get crawled. <p> <p>My first full crawl took several hours to complete. Next up will be fine-tuning the crawl schedule, and checking the logs to see what iFilters need to be installed.  
</span>

