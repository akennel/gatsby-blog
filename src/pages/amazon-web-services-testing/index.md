---
title: Amazon Web Services Testing
date: 2014-04-03
---

Yesterday I spent the day building out an evaluation deployment of WordPress on AmazonWS. I won’t bore you with the details of the deployment, there are many tutorials out there. All in all, it was a good experience with some real positives. I can say that I wasn’t particularly impress with the ECS offering. I’m…


<!-- end -->

Yesterday I spent the day building out an evaluation deployment of WordPress on AmazonWS. I won’t bore you with the details of the deployment, there are many tutorials out there. All in all, it was a good experience with some real positives.

I can say that I wasn’t particularly impress with the ECS offering. I’m not sure what I expected, but the reality is that you get a VM running a flavor of Linux. Configuration and patching and security, etc are all in your hands. Again, not sure what else I was expecting, but that left me a bit underwhelmed.

I was very fond of RDS however. That is exactly what I was hoping for — a mySQL database without having to worry about dealing with all the back-end details. I wonder why they don’t offer something similar for the web server end…give me an Apache or NginX instance where I have access to the config file and the www folder and nothing else.

In the end, we’ve decided that the cost is just too much. We have an in-house VMWare Host environment so it basically costs us nothing to spin up our own Linux instances. There’ll be more configuration on my part to build and maintain a mySQL cluster, but since my salary is a sunk cost, that doesn’t come into play.

I’m glad I took the time to build everything out and I’m sure I’ll have a project in the future that would justify its use, but for now my experiment for Amazon is over.

