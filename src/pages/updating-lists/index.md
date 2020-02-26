---
title: Updating Lists
date: 2008-06-24
---

I came across a problem today that I'd predicted weeks ago.  Our Sentinel Events site contains a couple dozen Lists that are used to track events for different facilities.  I used a custom list type to create these lists so that they all had the same customized Views. The problem with a custom list is…


<!-- end -->

I came across a problem today that I'd predicted weeks ago.  Our Sentinel Events site contains a couple dozen Lists that are used to track events for different facilities.  I used a custom list type to create these lists so that they all had the same customized Views.

The problem with a custom list is that it is a one-time mold.  You can stamp out as many copies of the list as you want, but once the copy is made, it stands alone; no future changes are inheritable.  I predicted when I started that the day would come that I'd need to make a change to the list, and would then be forced to manually update every copy of the list.  Today that happened.

When I first was working on the site, I was using a custom Content Query Web Part to pull data from all my lists and display it as a single list.  I got my custom web query working, but couldn't make it look and work as nicely as the List Roll-Up web part sold by Bamboo Solutions.  In the end, it was cheaper to buy their pre-built solution that for me to spend any more time working with my own.  

However, while I was working with my custom web part, I had run into problems with the fields names.  To pull the right fields, you need to reference them by the name used by the system.  My original field names had spaces and special characters, which made figuring out the field names challenging.  To save time, I changed the names of my fields.  Unfortunately for me, I'd already created my lists, which all referenced the old field names.

Today Dave noticed the error and asked me to fix it.  Luckily, only 3 of the fields had had their names changed.  I was able to update all my lists in about twenty minutes.  Note for the future — test everything before you start rolling out you lists.

