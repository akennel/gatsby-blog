---
title: Fixed export bug
date: 2008-02-04
---

Since installing the “Fab 40” templates from Microsoft, the export command has been broken for the Portal site. (stsadm -o export -url http://site -filename export). This is majorly annoying because export is the only way to migrate sites from one server to another. Without it, we were having major problems getting sites to the test…


<!-- end -->

Since installing the “Fab 40” templates from Microsoft, the export command  has been broken for the Portal site.
(stsadm -o export -url http://site -filename  export).
 
This is majorly annoying because export is the only way to migrate sites  from one server to another.  Without it, we were having major problems getting  sites to the test server so D could safely play with them.
 
I did some searching on the error that popped up: **Guid should  contain 32 digits with 4 dashes** and eventually found this [site.](http://sharepointsearch.com/cs/blogs/sharepointblogs/archive/2007/09/13/designer-export-fails-with-quot-guid-should-contain-32-digits-quot-error.aspx)
 
The fix was to edit a file called fields.xml located in <span>c:program filescommon  filesmicrosoft sharedweb server extensions12templatefeaturestsatypes.  It  appears that the Fab 40 templates add several hundred entries to this file, but  screw up the GUID, framing them with {}.  The fix is to remove the  brackets.</span>
<span></span> 
<span>I backed up the file on Apps –this would limit the impact if  my fix broke the server and I had to restore the backed up file.  I then  manually removed the brackets.  Once that was done, I crossed my fingers and  restarted IIS.   The server came online, and export works again!</span>
<span></span> 
<span>I then made the change to Web1 and Web2.  This time I  used find and replace rather than edit the file by hand.  All seems to be  well.</span>

