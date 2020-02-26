---
title: Discovered something new about workflow
date: 2008-02-28
---

I’ve been working with Lotus Notes for a decade now. Over all that time, I’ve come to know its quirks to the point that they don’t seem like quirks anymore. The just seem natural. I’ve found that the same thing happens with any new system as I learn it. Part of the learning process is…


<!-- end -->

I’ve been working with Lotus Notes for a decade now. Over all that time, I’ve come to know its quirks to the point that they don’t seem like quirks anymore. The just seem natural.   
I’ve found that the same thing happens with any new system as I learn it. Part of the learning process is the getting familiar with the nuts and bolts of the software. At the same time, I’m learning how the person who made the software thinks. Granted, any application as big as Sharepoint or Domino is built by a huge team of people. Still, that team works closely enough, that certain patterns of thought will emerge.  
A Microsoft system feels different than a Lotus product. The way the designers fit things together and the assumptions they make are quite obvious.

Case in point: We were working with an approval workflow. In this case, we had a form library and wanted to have a quick and easy approval cycle. The owner of the list wanted to be able to add additional approvers to each document, and then give final approval once they had signed off.  
So, I created an approval workflow, checked the box that allows additional approvers to be added and said here you go.  
This worked, but the owner noticed that the additional approvers weren’t getting email notifications. Now here’s where my not fully understanding how Microsoft works comes in. I double-checked my workflow, looked at some documents that were in the approval cycle, and concluded that perhaps only the first approver get an email notification. I then tried to think of work-arounds, and came up with the idea of using a second workflow in the Tasks list to get a notification out.   
Luckily before I put too much work into my “solution”, a light went on in my head. I realized that my workflow was a Serial workflow. That is, the workflow is approved 1 person at a time. The first person on that list of approvers was always the same. Any additional approvers were added after this first person.   
So, the workflow was working exactly as intended. The additional approvers would receive their email notifications as soon as the first approver approved the document. I didn’t see it, because I’m still not thinking the way Sharepoint thinks. Once I realized what was going on, I just changed my workflow from serial to parallel. Now additional approvers get an email notifications immediately.

