---
title: File Search Revisited
date: 2008-05-12
---

Now that our test box is back in business, I was able to go through an configure Search again.  Sharepoint helpfully automatically configures all your Web Apps as sources for you, so to get basic Searching up and running all you need to do is define a schedule for Full and Incremental crawls.  I like to…


<!-- end -->



Now that our test box is back in business, I was able to go through an  configure Search again.  Sharepoint helpfully automatically configures all your  Web Apps as sources for you, so to get basic Searching up and running all you  need to do is define a schedule for Full and Incremental crawls.  I like to go  once a month for Full crawls and every 20 minutes for Incrementals.
My next stop was to get PDF searching working.  Search uses iFilters to  make this work, and…it's a bit of a pain.  Put quickly you need to:
1) Download and install the iFilter from Adobe or Foxit.
2) Add the location of the iFilter to the system path.
3) Add pdf as a File Type to your Search Service Provider via the Central  Administration site.
4) Update the GUID for the current iFilter DLL in the Registry.
5) Download an icon to use for pdf files, and update the icons XML  file.
6) Restart the osearch Windows Service.
7) Restart IIS.
8) Run a Full Index.
 
Yikes!  That's a lot of steps.  Of course, you need to repeat them all if  you want to add additional file types.
 
So, once I got all that working, it was time to take another look at  indexing file shares.  This is something I had just started work on when we had  our big April crash.  In all the rebuilding work that followed that disaster, I  hadn't had a chance to revisit it.
 
For the file share I wanted to index, I needed to specify a different  network account.  Sharepoint does this via Rules.  At first this didn't make  sense to me.  You're already setting up a Source document…why not specify the  account there?  The advantage of using a Rule to store the account is that you  can have multiple accounts used in the same source.
Say that you have the following file share:
Share–
           |–Dir1
           |–Dir2
           |–Dir3
 
You can set up your source as [\Share](file://share/).
Now you can set a rule that says [\Share](file://share/)* uses  AccountA to crawl. Dir1, Dir2, and Dir3 will be crawled using the same  account.
 
But say that AccountA doesn't have access to Dir2.  All you do is create a  second rule that says [\ShareDir2](file://share/Dir2/)* uses  AccountB.  Now Dir1 and Dir3 will continue to use AccountA, but Dir2 will use  AccountB.  If you had used Sources to control account access, you would have had  to write a Source for each Directory.  Pretty slick, eh?
 
You can also use rules to bypass certain subdirectories.  In my example  above, you could create a rule that excludes Dir3 from being crawled.  That  wouldn't affect the Source document, and the other rules continue to function  normally.  
 
So that's where I'm at now…waiting for our Department share to finish  crawling.  If memory serves, this takes about 10 hours to complete.


