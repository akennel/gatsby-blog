---
title: Syncing WordPress local content
date: 2014-04-15
---

So for redundancy (and performance) we’re going to run WordPress on at least 2 web servers. That means we need to ensure that uploaded media gets synced between the servers. There are a lot of approaches to this on the web from the very complicated using distributed file systems to the simple, using 3rd party…


<!-- end -->

So for redundancy (and performance) we’re going to run WordPress on at least 2 web servers. That means we need to ensure that uploaded media gets synced between the servers.

There are a lot of approaches to this on the web from the very complicated using distributed file systems to the simple, using 3rd party hosts. We had to reject the later (and most popular) since we have a budget of $0 and so even Amazon’s affordable rates are out of reach at this time.

I rejected the more exotic file systems as being just too complex to support. I’m sure I could get things running with minimal difficulty, but if/when something went wrong, I would be out of my league trying to trouble-shoot.

Instead I opted for a simple approach of using an NFS share and symbolic link. That worked, but ultimately had it’s own issues which I’ll detail in my next post.

