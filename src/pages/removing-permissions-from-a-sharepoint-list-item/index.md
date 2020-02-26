---
title: Removing permissions from a Sharepoint list item
date: 2009-06-29
---

I recently came across an interesting problem while working on an Infopath form. As part of the submission process, I needed to remove all the permissions from my new document. This seemed easy to do using by calling Item.BreakRoleInheritence = true and then removing all the existing permissions from the item. When I published my form,…


<!-- end -->

<span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt">I recently came across an interesting problem while working on an Infopath form. As part of the submission process, I needed to remove all the permissions from my new document. This seemed easy to do using by calling Item.BreakRoleInheritence = true and then removing all the existing permissions from the item.</span>

<span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt"> </span>

<span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt">When I published my form, I found that my approach generated an error: </span><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt">An exception of type 'System.UnauthorizedAccessException' occurred in Microsoft.SharePoint.dll but was not handled in user code. </span><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt">Additional information: Access is denied. (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED))</span>

<div style="MARGIN: 0in 0in 0pt"><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt">This error occured for any user who had Contribute access to the form library.  </span>
<div style="MARGIN: 0in 0in 0pt"><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt"></span><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt"> </span>


<span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt">After a bit of searching, I found this article: [http://social.msdn.microsoft.com/Forums/en-US/sharepointdevelopment/thread/c3d2b304-7fcc-40d2-86ce-61d9b21b03d7](http://social.msdn.microsoft.com/Forums/en-US/sharepointdevelopment/thread/c3d2b304-7fcc-40d2-86ce-61d9b21b03d7) Look for the reply made by Kjetil Gullen on July 27.</span>

<span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt"> </span>

<div style="MARGIN: 0in 0in 0pt"><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt">The answer lies with how the .BreakRoleInheritence interacts with web.AllowUnsafeUpdates = true.  I won’t go into the full explanation as the poster does an excellent job, but below is a code snippet that shows how to do this correctly.</span>
<div style="MARGIN: 0in 0in 0pt"><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt"></span> 
<div style="MARGIN: 0in 0in 0pt"><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt"> 

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">SPSecurity</span>.RunWithElevatedPrivileges(<span style="COLOR: blue">delegate</span>()</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> {</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">SPWeb</span> _webInUserContext = <span style="COLOR: #2b91af">SPContext</span>.Current.Web;</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">SPSite</span> _siteInUserContext = <span style="COLOR: #2b91af">SPContext</span>.Current.Site;</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">Guid</span> _webGuid = _webInUserContext.ID;</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">Guid</span> _siteGuid = _siteInUserContext.ID;</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> </span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: blue">using</span> (<span style="COLOR: #2b91af">SPSite</span> _site = <span style="COLOR: blue">new</span> <span style="COLOR: #2b91af">SPSite</span>(_siteGuid))</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> {</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> _site.AllowUnsafeUpdates = <span style="COLOR: blue">true</span>;<span style="COLOR: #9bbb59">//Allow Unsafe Updates for the Site</span></span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">SPWeb</span> _web = _site.OpenWeb(_webGuid);</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> _web.AllowUnsafeUpdates = <span style="COLOR: blue">true</span>;<span style="COLOR: #9bbb59">//Allow Unsafe Updates for the Web</span></span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">SPList</span> docList = _web.Lists[<span style="COLOR: #a31515">"Requests"</span>];</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> </span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #2b91af">SPListItem</span> itemListItem = docList.Items.GetItemById(itemListID);</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> itemListItem.Web.AllowUnsafeUpdates = <span style="COLOR: blue">true</span>;<span style="COLOR: #9bbb59">//Web as referenced by the item</span></span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> </span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> itemListItem.BreakRoleInheritance(<span style="COLOR: blue">true</span>);<span style="COLOR: #9bbb59">//Break your inheritence</span></span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> </span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> itemListItem.Web.AllowUnsafeUpdates = <span style="COLOR: blue">true</span>;<span style="COLOR: #9bbb59">//Breaking inheritence resets</span></span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #9bbb59">//Unsafe Updates, reenable it</span></span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> </span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: #9bbb59">//Remove the permissions one by one</span></span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> <span style="COLOR: blue">foreach</span> (<span style="COLOR: #2b91af">SPRoleAssignment</span> spra <span style="COLOR: blue">in</span> itemListItem.RoleAssignments)</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> {</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> spra.RoleDefinitionBindings.RemoveAll();</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> spra.Update();</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> }</span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> </span>

<span style="FONT-FAMILY: 'Courier New'; FONT-SIZE: 10pt"> });}</span><span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 10pt"></span>

 </span>

