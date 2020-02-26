---
title: Sharepoint Howto - Migrate a site
date: 2008-03-05
---

I know of two ways to migrate a site: using the stsadm command line tool, and using the Sharepoint Designer application. In this post, I’ll go over using stsadm. There are two steps to migrating a site, exporting and importing. You begin by exporting the site you wish to move. Here is the command for…

<!-- end -->

I know of two ways to migrate a site: using the stsadm command line tool, and using the Sharepoint Designer application. In this post, I’ll go over using stsadm.

There are two steps to migrating a site, exporting and importing. You begin by exporting the site you wish to move. Here is the command for this as I usually use it:  

```cmd
stsadm -o export -url http://somesite.com/site -filename c:exportfilename -includeusersecurity  
```

This export uses all the default values. Most of these are self explanatory. The includeusersecurity copies any access groups used by the group along with their membership.

Once your export has completed, you’ll have several files ending with a .cmp extension. These are the actual exported files, compressed to save space. You’ll also have an export log file. Take a look at this to see if there were any errors.

If you’re migrating to a new physical server, you need to copy all the .cmp files to that server. I usually create a new folder on the c drive called import.

Before you can import your site, you need to have an empty site of the same type already created. Just create a site with the Title and URL you want to use via the Site Actions menu on the browser. The template has to be the same as the template used to create the original site. This means that any custom templates you’ve created need to be installed on the new server before you can migrate anything.

Once your empty site is created, the import process is basically a mirror image of the export.  
The command I usually use is:

```cmd
stsadm -o import -url http://newsite.com/site -filename c:importexportfile.cmp -includeusersecurity
```
