---
title: Covid-19 related bug!
date: 2020-04-30
---

Found a bug in my Septa Train Status app

<!-- end -->

This is an app you can use to check the status of Septa's reginal rail train service. You get to select your Home station and your Work station, and it'll show you the next couple of trains going each direction.

You can try it out [here](https://train.akennel.com)

Like a lot of people, I've been working from home since mid-March, so haven't checked the train, or really thought about it much. On a walk last night, I remarked that it's been a long time since I'd seen the train go by or heard its horn. I pulled out my phone to check when the next train would go by and got a blank result.

Today I checked on Septa's web site and found that they've suspended all service for the time being. (Which shows how observent I am) I wasn't sure how my app would handle this, so I pulled it up with Dev Tools, and saw that it was caught in an endless loop querying the API, which, oops! Thankfully, I'm pretty sure my wife and I are the only people who use this app (really need to add some analytics) so no harm done.

Looking through the code, it was easy to find and fix my error. I was using a primitive check to see if I needed to call the API...if the train schedule array count is 0, call the API. This worked in the past because the API always returns the next few trains. If it's the end of the day, it'll return the next train tomorrow. If a line is down for service, it'll show the next train for when service is set to resume.

For the first time ever, the API was just returning an empty array. And if that's not a metaphor for our current situation, I don't know what is.
