---
title: New version of SPWakeUp
date: 2008-09-22
---

The new version adds the option to exclude sites.  It took me a little longer than I expected to add this feature.  My first approach was to build an ArrayList of exclude sites.  Then, I just put and if/else check around every attempt to add a site to the wake-up list.   This worked fine…


<!-- end -->

<div dir="ltr">The new version adds the option to exclude sites.  It took me a little longer than I expected to add this feature.  My first approach was to build an ArrayList of exclude sites.  Then, I just put and if/else check around every attempt to add a site to the wake-up list.  


<div> This worked fine for exact matches, but sub-sites were sneaking through.  For example, if I'm blocking [www.server.com/mysite](http://www.server.com/mysite) then [www.server.com/mysite/userA](http://www.server.com/mysite/userA) would be allowed.  Turns out I'd been a bit lazy.  My if statement was just if (excludeList.Contains(currentsite)).  Seems, OK, right?  The problem is that the ArrayList.Contains method only returns on exact matches.  The fix is the iterate through my exclude list and plug each entry into a string, then use the string.Contains method instead.  The string.Contains method returns true on substring matches, so as long as the first part of the URL is a match, you'll catch the sub-site.</div>
<div></div>
<div>I've got my first bug report.  Apparently spwakeup is failing on servers that use Forms Authentication.  Since I don't have any test servers or even production servers that use Forms Authentication this is going to be tricky to fix.  </div>
<div></div>
<div>As usual, you'll find the lastest version on [http://www.codeplex.com/SPWakeUp](http://www.codeplex.com/SPWakeUp)</div>
</div>

