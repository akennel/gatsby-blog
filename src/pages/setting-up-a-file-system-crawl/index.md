---
title: Setting up a file system crawl
date: 2008-03-31
---

Today I got an AD account from our IS department that had enough permissions to do a file crawl. They asked me to test crawling all the directories located on our department fileshare.This requires setting up two documents. The first setting is the Crawl Source. You access this via your Shared Services Administrative web site….

<!-- end -->

Today I got an AD account from our IS department that had enough permissions to do a file crawl. They asked me to test crawling all the directories located on our department fileshare.

This requires setting up two documents.  

The first setting is the Crawl Source. You access this via your Shared Services Administrative web site.  From there, go to Search Settings then Content Sources and crawl schedules.  

You can set the path and the crawl schedule. Notice that there’s no where to put account information. For that you need to configure a Crawl Rule.  

Crawl rules are accessed from the Search Settings page, and are the next item below Content Sources.

This is where you can configure what account Sharepoint uses to crawl the content. Notice also the bit about crawling URLs with ? marks. In this case, we’re crawling a file server, so this doesn’t have any affect. If we were crawling a Sharepoint site, it would ensure that all the subpages get crawled.

My first full crawl took several hours to complete. Next up will be fine-tuning the crawl schedule, and checking the logs to see what iFilters need to be installed.  
