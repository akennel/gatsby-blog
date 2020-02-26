---
title: New version of Domino to Infopath tool uploaded
date: 2008-03-16
---

I’ve just uploaded a new version of my Domino to Infopath tool. You can download a copy here. This latest version is an overhaul of the mapping screen’s UI. I changed it from a single window that expanded to include all the fields, to a nicer tabbed interface. Now you get 14 fields on a…


<!-- end -->

I’ve just uploaded a new version of my Domino to Infopath tool. You can download a copy [here.](https://code.msdn.microsoft.com/Release/ProjectReleases.aspx?ProjectName=CSVtoInfopathTool&ReleaseId=672)

This latest version is an overhaul of the mapping screen’s UI. I changed it from a single window that expanded to include all the fields, to a nicer tabbed interface. Now you get 14 fields on a tab, and the tool automatically adds additional tabs as needed. Nothing special about 14, I just thought it looked nice.

It took me longer than I thought it would to get this release out. I’d read on various web sites that controls in a tabpage could be referenced just like tabs on a form: this.Controls(controlName).  
Turns out this isn’t true. I eventually figured out that I needed to reference each control by the tabpage it appears on. I ended up with this little code nugget:

 foreach (TabPage currentpage in tabControl1.TabPages)  
 { foreach (Control currentfield in currentpage.Controls)  
 { if (currentfield.Name == filename)  
 { arraymap[n] = myItem.Text;} } }

