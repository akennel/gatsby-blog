---
title: Customizing the Content Query Web Part
date: 2008-06-11
---

Whew!  That was a lot of work.  I'm still working on the Sentinel Event site.  We have a group of Lists and want to have a single web part display entries from all the lists in one place.    We looked at a web part from Bamboo Solutions that does this, but a) it's not…


<!-- end -->


<div>Whew!  That was a lot of work.  I'm still working on the Sentinel Event  site.  We have a group of Lists and want to have a single web part display  entries from all the lists in one place.  </div>
<div> </div>
<div>We looked at a web part from Bamboo Solutions that does this, but a) it's  not free, and b) there's a delay from when you add an item to when it appears in  the web part.</div>
<div> </div>
<div>I was able to get the same sort of thing working with a content query web  part, but that only showed the Title of the document, and no other information.   I spent the morning seeing what I could do to improve on this.</div>
<div> </div>
<div>Here are the instructions I  used: [http://www.heathersolomon.com/blog/articles/CustomItemStyle.aspx](http://www.heathersolomon.com/blog/articles/CustomItemStyle.aspx)</div>
<div> </div>
<div>To start with, you need to  take your existing content query web part and export it.  Once you have the XML  file, you need to customize one of the lines to pull in additional columns.   Here's the line in  the WebPart you need to customize:</div>
<div><property  name="CommonViewFields" type="string">Title, Text;Date,  DateTime;PublishingContactName, Note;Injury, Choice;Phone,  Note</property></div>
<div>Note the format, it's case  sensitive, and the spaces have to be used as shown above.</div>
<div> </div>
<div>Once your web part has been updated, you'll need to  upload it to your Web Part gallery.  Once there, you'll be able to add the web  part back to your page…and it won't look any different.  To display the new  columns, you need to customize you CSS.  This is found in the file ItemStyle.xsl, which is held at the  Site Collection level under Style Library…XSL Style Sheets.   </div>
<div>I just copied an existing  template and added a table for formatting.</div>
<div> </div>
<div><xsl:template  name="Andrew" match="Row[@Style='Andrew']"  mode="itemstyle"></div>
<div><xsl:variable  name="SafeLinkUrl"></div>
<div><xsl:call-template  name="OuterTemplate.GetSafeLink"></div>
<div><xsl:with-param  name="UrlColumnName" select="'LinkUrl'"/></div>
<div></xsl:call-template></div>
<div></xsl:variable></div>
<div><xsl:variable  name="DisplayTitle"></div>
<div><xsl:call-template  name="OuterTemplate.GetTitle"></div>
<div><xsl:with-param  name="Title" select="@Title"/></div>
<div><xsl:with-param  name="UrlColumnName" select="'LinkUrl'"/></div>
<div></xsl:call-template></div>
<div></xsl:variable></div>
<div><xsl:variable  name="LinkTarget"></div>
<div><xsl:if  test="@OpenInNewWindow = 'True'" >_blank</xsl:if></div>
<div></xsl:variable></div>
<div><div id="linkitem"  class="item link-item bullet"></div>
<div><table cellpadding =  "5"></div>
<div><tr></div>
<div><td>  <xsl:call-template  name="OuterTemplate.CallPresenceStatusIconTemplate"/></div>
<div><a href="{$SafeLinkUrl}"  target="{$LinkTarget}" title="{@LinkToolTip}"></div>
<div><xsl:value-of  select="$DisplayTitle"/></a></div>
<div></td></div>
<div><td><xsl:value-of  select="@PublishingContactName" /></td></div>
<div><td>Phone:  <xsl:value-of select="@Phone" /></td></div>
<div><td>Injury?:  <xsl:value-of select="@Injury" /></td></div>
<div></tr></div>
<div></table></div>
<div></div>  </div>
<div></xsl:template></div>
<div> </div>
<div>Once you save the file and  check it back in you can refresh the page and see your changes.   Hooray!</div>
<div> </div>
<div>One note:  I ran into trouble  early on because my column names contained spaces and special characters like  '?'.  That made it hard to find the name that was used to reference the  columns.  The linked site has a way to find these names…but that didn't work  in my case.  I ended up renaming the columns.</div>

