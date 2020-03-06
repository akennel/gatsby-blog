---
title: New Version of Septa Train Status
date: 2020-03-06
---

I've rebuilt my Septa Regional Rail status app using React. If you click on the Train link up top, you can see it in action.

<!-- end -->

There were a few challenges on this update. 

First off, Septa claims to have added CORS support for their APIs [Medium Post](https://medium.com/septa-stats/cors-support-added-18122d15b540) but they appear to have missed the [Next To Arrive](http://www3.septa.org/api/) service which I use for this app.

They do support JSONP, and there are a few React libraries that claim to be able to handle JSONP API calls, but I couldn't get them to work. Instead I turned to my old friend JQuery which had no problem parsing the returned times.

I wouldn't normally include JQuery in a React app, but it works, it's familar, and as I'm not using it for anything interface related, I don't think it much matters.

My second issue was my own fault. I decided to get modern and using React Functional Components, instead of the Class based components I'm used to. Which meant I also had to embrace Hooks. It took some effort to adjust, and more swearing that I'd like to admit, but I can definitely see the appeal. It's a much simpler, cleaner approach.

All in all, this was a fun little project. I like to rebuild this app as an excercise to learn new technologies since it touches just about everything: API calls, mobile interface, cookies for user settings, parsing JSON, etc.

I also used [Tailwind](https://tailwindcss.com/) for my styling, and just about fell in love. More on that in the future I'm sure. I don't know that I'll use it for work, but I'm convinced that all my future personal project will be using it.
