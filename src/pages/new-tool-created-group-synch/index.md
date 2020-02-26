---
title: New Tool Created – Group Synch
date: 2010-08-09
---

I just posted a new tool on the CodePlex this afternoon. Here's a lin: http://spgroupsynch.codeplex.com/ The tool synchronizes groups between Site Collections in Sharepoint. You show it a Site Collection to start from, it pulls all the Groups and Group Membership and then copies it over to another Site Collection. It's a one-way push…


<!-- end -->

<div>I just posted a new tool on the CodePlex this afternoon.  Here's a lin: [http://spgroupsynch.codeplex.com/](http://spgroupsynch.codeplex.com/)</div>
<div> </div>
<div>The tool synchronizes groups between Site Collections in Sharepoint.  You show it a Site Collection to start from, it pulls all the Groups and Group Membership and then copies it over to another Site Collection.  It's a one-way push only, although you could get that if you run the tool again with the To and From sites reversed now that I think about it.</div>
<div> </div>
<div>I wrote the tool over the weekend because my manager was worried about the ability to get our custom workflows running on multiple site collections.  Our workflows use Group Memberships to control access to forms and assign tasks…and we have literally thousands of them.  Basically every job title at every location gets a group, eg Corporate CEO, HospitalA CFO, etc.  Trying to keep all these groups up to date is already a daunting task in our single site collection.  Just thinking of maintaining multiple copies of these groups updated across a couple dozen site collections was giving me nightmares.</div>
<div> </div>
<div>This was a fun little script to write.  I used the basic framework that I originally came up with building my SPWakeup app.  This handles things like Logging, Run-Time options, etc.  In this version I replaced asking for a mail server IP at runtime and used the SPUtility.Sendemail() instead.  It's a much cleaner way to handle mail, and should avoid some time-out issues I've been having with our internal mail server. </div>
<div> </div>
<div>This is also the first time I've really taken advantage of Class constructors. In the past I'd just been createing my class object, and then manually setting the properties. This has been a silly way to do things, so I forced myself to work with constuctors on this project. I'm very happy with the results.</div>
<div> </div>
<div>I think I can also say that I've finally gotten a real handle on working with SPGroup and SPUser objects.  I've been working a great deal with Permissions lately, so I've been knee-deep in SPMembers for the last few months.  When I was writing this tool, I actually wrote all the major functions without ever debugging or building.  When I launched it for the first time this afternoon, I was really pleased that everything worked the way I expected it to the first time.</div>
<div> </div>
<div> </div>
<div> </div>
<div> </div>

