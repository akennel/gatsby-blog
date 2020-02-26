---
title: Random Image Web Part
date: 2008-08-28
---

On our production site, we have a random image that is displayed showing pictures of our various hospitals.  We purchased a copy of Data Springs Flash Image rotater, but have never been happy with it.  The flash image sometimes appears blank when the client's flash player is of the wrong version, or it's cache gets…


<!-- end -->

<div dir="ltr">On our production site, we have a random image that is displayed showing pictures of our various hospitals.  We purchased a copy of Data Springs Flash Image rotater, but have never been happy with it.  The flash image sometimes appears blank when the client's flash player is of the wrong version, or it's cache gets out of wack.

Today I decided to write a new random image web part, using the excellent Smart Part web part written by Jan Tielens.  It turned out to be a fairly easy excercise, and I was able to get the whole thing running after about two hours work.  The only difficult part was figuring out why the web part kept adding /UserControls/ to my image URLs and dealing with it.

This web part displays a random image every time the page is loaded.  You configure it by specifying the Picture Library you want to use as the source for the pictures.  I need to add some error-checking code to handle missing Libraries and incorrect file types, but even as is, it seems to work fine.

Here is the code:

using System;  
using System.Data;  
using System.Configuration;  
using System.Collections;  
using System.Web;  
using System.Web.Security;  
using System.Web.UI;  
using System.Web.UI.WebControls;  
 using System.Web.UI.WebControls.WebParts;  
using System.Web.UI.HtmlControls;  
using Microsoft.SharePoint.WebControls;  
using Microsoft.SharePoint;  
using Microsoft.SharePoint.WebPartPages;  
using Microsoft.SharePoint.WebPartPages.Communication;  
 using System.Collections.Generic;  
using System.Text.RegularExpressions;

public partial class RandomImage : System.Web.UI.UserControl  
{  
    private string _libname = null;//Name of ImageLibrary  
    public ArrayList imagelist = new ArrayList();   
     /// Grab name of List and Column used to populate dropdown list.  
    [WebBrowsable(true),  
    WebDisplayName("Image Library Name"),  
    WebDescription("Please specify which Image Library contains the pictures you want to display."),  
     Personalizable(PersonalizationScope.Shared)]  
    public string NameofLibrary  
    {  
        get { return this._libname; }

        set { this._libname = value; }  
    }

    protected void Page_Load(object sender, EventArgs e)  
     {  
        if (_libname != null)  
        {  
            //Open the current web site  
            SPWeb site = SPContext.Current.Web;  
            //Open the specified list  
            SPList list = site.Lists[NameofLibrary];  
             SPListItemCollection allItems = list.Items;  
            foreach (SPListItem currentitem in allItems)  
            {  
                imagelist.Add(currentitem.Url);  
            }  
            Random randomnumber = new Random();  
             int pic = randomnumber.Next(imagelist.Count -1);  
            string image = (string)imagelist[pic];  
            image = Image1.ResolveClientUrl(image);  
            image = image.Replace("UserControls/", "");  
             Image1.ImageUrl = image;  
            Image1.Visible = true;

        }  
    }  
}

