---
title: Fallout from today’s patch
date: 2008-02-26
---

I received two complaints this afternoon that the portal was down. It was working fine for me, and for the other people around me, so I assumed it was a client problem. Both the people reporting trouble logged in to our network via VPN, so I started my trouble-shooting there. Long story short, it eventually…


<!-- end -->

I received two complaints this afternoon that the portal was down. It was working fine for me, and for the other people around me, so I assumed it was a client problem.

Both the people reporting trouble logged in to our network via VPN, so I started my trouble-shooting there. Long story short, it eventually turned out to be much simpler. When IIS was restarted on the secondary web front-end box, it did not start the Portal Web Site. 

It just happened that my client, and the people around me were being shunted to the primary box by NLB. That’s why everything looked fine from my end, and I blamed the client’s software.

Lessons to take away: 1 – Always check the fundamentals. Never make assumptions.  
2 – Even though you have redundant servers, and fail over up the wazoo never, ever patch during work hours. 

When you do patch, check everything from the ground floor up. Don’t just load the site and test the bug that the patch is supposed to address. Your server isn’t up until you check that every level of the server is running correctly. Just because you can see a web page doesn’t mean nothing is wrong.

