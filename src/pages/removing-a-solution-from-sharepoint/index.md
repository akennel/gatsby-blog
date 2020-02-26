---
title: Removing a solution from Sharepoint
date: 2008-07-01
---

Today we tried out a third party solution, decided we didn't like it, and had to remove it.  Strangely enough, this has never come up before.  I've added and deployed plenty of solutions, but have never needed to get rid of one. The process is a mirror image of adding a solution.  First you Retract…


<!-- end -->

Today we tried out a third party solution, decided we didn't like it, and had to remove it.  Strangely enough, this has never come up before.  I've added and deployed plenty of solutions, but have never needed to get rid of one.

The process is a mirror image of adding a solution.  First you Retract it from all the Web Applications that it was deployed to: stsadm -o retractsolution -name Whatever.wsp -allcontenturls -immediate  
Once that finishes you can then Delete the solution: stsadm -o deletesolution -name Whatever.wsp  
 Nothing to it.

