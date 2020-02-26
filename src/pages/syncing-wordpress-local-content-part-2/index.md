---
title: Syncing WordPress local content, Part 2
date: 2014-08-22
---

So several months ago I posted about synching local content — the uploads folder especially, but also the themes and plugin folders. At the time I was working with an NFS mount and a script to pull. I eventually scrapped that for an even simpler cron job running an rsync directly against the remote server….


<!-- end -->

So several months ago I posted about synching local content — the uploads folder especially, but also the themes and plugin folders. At the time I was working with an NFS mount and a script to pull.

I eventually scrapped that for an even simpler cron job running an rsync directly against the remote server. The disadvantage is it means you have to have a centralized “Admin” server where everything is uploaded to. The other servers are just used for serving up content.

There’s a fun an easy way to make this work on AWS. Set your site behind a Load Balancer. Configure WordPress to require https for Logins and Admin access. On your Admin server enable both http and https. On your other servers enable only http. The AWS load balancer will direct all the https traffic to the Admin server automatically.

