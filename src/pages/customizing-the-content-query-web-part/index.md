---
title: Customizing the Content Query Web Part
date: 2008-06-11
---

Whew!  That was a lot of work.  I'm still working on the Sentinel Event site.  We have a group of Lists and want to have a single web part display entries from all the lists in one place.    We looked at a web part from Bamboo Solutions that does this, but a) it's not…


<!-- end -->


Whew!  That was a lot of work.  I'm still working on the Sentinel Event  site.  We have a group of Lists and want to have a single web part display  entries from all the lists in one place.  
 
We looked at a web part from Bamboo Solutions that does this, but a) it's  not free, and b) there's a delay from when you add an item to when it appears in  the web part.
 
I was able to get the same sort of thing working with a content query web  part, but that only showed the Title of the document, and no other information.   I spent the morning seeing what I could do to improve on this.
 
Here are the instructions I  used: [http://www.heathersolomon.com/blog/articles/CustomItemStyle.aspx](http://www.heathersolomon.com/blog/articles/CustomItemStyle.aspx)
 
To start with, you need to  take your existing content query web part and export it.  Once you have the XML  file, you need to customize one of the lines to pull in additional columns.   Here's the line in  the WebPart you need to customize:
<property  name="CommonViewFields" type="string">Title, Text;Date,  DateTime;PublishingContactName, Note;Injury, Choice;Phone,  Note</property>
Note the format, it's case  sensitive, and the spaces have to be used as shown above.
 
Once your web part has been updated, you'll need to  upload it to your Web Part gallery.  Once there, you'll be able to add the web  part back to your page…and it won't look any different.  To display the new  columns, you need to customize you CSS.  This is found in the file ItemStyle.xsl, which is held at the  Site Collection level under Style Library…XSL Style Sheets.   
I just copied an existing  template and added a table for formatting.
 
<xsl:template  name="Andrew" match="Row[@Style='Andrew']"  mode="itemstyle">
<xsl:variable  name="SafeLinkUrl">
<xsl:call-template  name="OuterTemplate.GetSafeLink">
<xsl:with-param  name="UrlColumnName" select="'LinkUrl'"/>
</xsl:call-template>
</xsl:variable>
<xsl:variable  name="DisplayTitle">
<xsl:call-template  name="OuterTemplate.GetTitle">
<xsl:with-param  name="Title" select="@Title"/>
<xsl:with-param  name="UrlColumnName" select="'LinkUrl'"/>
</xsl:call-template>
</xsl:variable>
<xsl:variable  name="LinkTarget">
<xsl:if  test="@OpenInNewWindow = 'True'" >_blank</xsl:if>
</xsl:variable>
<div id="linkitem"  class="item link-item bullet">
<table cellpadding =  "5">
<tr>
<td>  <xsl:call-template  name="OuterTemplate.CallPresenceStatusIconTemplate"/>
<a href="{$SafeLinkUrl}"  target="{$LinkTarget}" title="{@LinkToolTip}">
<xsl:value-of  select="$DisplayTitle"/></a>
</td>
<td><xsl:value-of  select="@PublishingContactName" /></td>
<td>Phone:  <xsl:value-of select="@Phone" /></td>
<td>Injury?:  <xsl:value-of select="@Injury" /></td>
</tr>
</table>
  
</xsl:template>
 
Once you save the file and  check it back in you can refresh the page and see your changes.   Hooray!
 
One note:  I ran into trouble  early on because my column names contained spaces and special characters like  '?'.  That made it hard to find the name that was used to reference the  columns.  The linked site has a way to find these names…but that didn't work  in my case.  I ended up renaming the columns.

