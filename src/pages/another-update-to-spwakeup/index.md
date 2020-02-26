---
title: Another update to SPWakeUp
date: 2008-04-08
---

I’ve made another update to my SPWakeup script.This latest version adds the ability to wake Site Collections in addition to Sub Sites.As always, you can download the latest version here:http://code.msdn.microsoft.com/spwakeup This script uses STSADM to list the sites. It runs stsadm -o enumsubwebs and stsadm -o enumsites then parses through the resulting text.Both commands return…


<!-- end -->

I’ve made another update to my SPWakeup script.  
This latest version adds the ability to wake Site Collections in addition to Sub Sites.  
As always, you can download the latest version here:  
[http://code.msdn.microsoft.com/spwakeup](http://code.msdn.microsoft.com/spwakeup)

This script uses STSADM to list the sites. It runs stsadm -o enumsubwebs and stsadm -o enumsites then parses through the resulting text.  
Both commands return their data in XML. I’ve found it easier to just treat the results as plain text and strip out the XML tags:  
cmd2_output = cmd2_output.Substring(13);  
cmd2_output = cmd2_output.Substring(0, cmd2_output.IndexOf(‘”‘));

