---
title: Using Sharepoint Designer to Backup/Restore a Site
date: 2008-04-23
---

I mentioned in an earlier post today that I'd rebuilt the dev server.  After my first rebuild of the test server, I had a running server, but could not restore the old sites from backup.  The server was left running this way for about a week while I worked on other problems.  During this time,…


<!-- end -->

<div>I mentioned in an earlier post today that I'd rebuilt the dev server.   After my first rebuild of the test server, I had a running server, but could not  restore the old sites from backup.  The server was left running this way for  about a week while I worked on other problems.  During this time, D created a new site and started working on some Infopath forms.  When I warned  her that I was going to rebuild the server again, she asked me to backup the  site she'd created.</div>
<div> </div>
<div>For this backup, I used the Sharepoint Designer tool.  Sharepoint Designer  allows you to backup sites, but has a size limit of 25MB.  (There are some work-arounds for this that you can find via Google, but I wouldn't recommend going that route).  This means it isn't practical for a full site backup, but was perfect  for a single site.  Once I had the dev server back up, I was able to quickly  restore the site.  </div>
<div> </div>
<div>Here are the steps for backing up a site using Sharepoint Designer:</div>
<div>Launch Sharepoint Designer and click File…Open Site.  Enter the URL of  the Site you want to backup — drop the file.aspx from the end of the URL.  For  example: [http://server.mycompany.com/site](http://corp-wsstest/FixedAssetCIP/)</div>
<div>With the site open in Designer, click Site…Administration…Backup Web  Site.  You'll be given the option to backup sub-sites of the current site as a  checkbox option.  If you click on Advanced, you'll have the option of changing  where Designer stores its temporary files.  Click OK and you'll get the standard  Save As dialog.  Backup files use the .CMP extension.</div>
<div> </div>
<div>Restoring a site from a Designer backup is a little more complicated:</div>
<div>Begin by creating a new, empty site for your backup to be restored to.   From Designer, click File…New…Web Site.  On the dialog box, click on the  General templates, and select the Empty Web Site template.</div>
<div></div>
<div>At the bottom of the dialog, type the URL of the new site and click  OK.


</div>
<div>Once the new, empty site has been created, open it in Designer, and click  Site…Administration…Restore Web Site.  Find the .CMP backup file and click  OK.  That's pretty much all there is to it.  </div>
<div> </div>
<div>Much quicker and easier than using the command line and more reliable that  using the Restore option off the Central Administration Site.</div>

