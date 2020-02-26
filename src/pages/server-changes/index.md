---
title: Server changes
date: 2008-06-19
---

I just made a couple of adjustments to the search service on our production portal.  First, I bumped the Incremental indexing up to 15 minutes.  It had been running every hour.  Checking the logs, I could see that this job was finishing in 3 to 5 minutes.  I'll keep an eye on my change. I…


<!-- end -->

I just made a couple of adjustments to the search service on our production portal.  First, I bumped the Incremental indexing up to 15 minutes.  It had been running every hour.  Checking the logs, I could see that this job was finishing in 3 to 5 minutes.  I'll keep an eye on my change.

I also switched the indexer from using the 2 web front end boxes for indexing to running exclusively on the admin box.  I've heard conflicting information on this.  Some sources say it is better to spread the indexing load across multiple boxes, some say it is better to segregate the task so end users aren't affected.

I decided this second argument made more sense in our case, particularly because indexing doesn't seem to be putting much of a strain on the admin box.  I'll need to revisit this decision if we ever start indexing network drives, and when the number of documents stored on the portal goes up.

