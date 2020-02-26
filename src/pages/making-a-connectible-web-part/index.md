---
title: Making a connectible web part
date: 2008-08-25
---

For the last couple of days, I've been working on creating a custom web part to use as a filter.  I had no problems getting the web part created, and even reading in values from a Sharepoint list to populate a drop-down menu.  What I had trouble with was configuring my web part to act…


<!-- end -->

<div dir="ltr">For the last couple of days, I've been working on creating a custom web part to use as a filter.  I had no problems getting the web part created, and even reading in values from a Sharepoint list to populate a drop-down menu.  What I had trouble with was configuring my web part to act as a connection provider. 

All the examples I found via Google were written to create a Provider and Consumer web part and connect them to each other.  I couldn't find anything that explained how to create a provider that could be connected to a generic list web part.  Finally today, I stumbled on a new approach, and was able to get my connection working with some help from D.

Here's what I ended up with:

<span style="color: rgb(0, 153, 0);">(snipped out a bunch of code to get to the good stuff)</span>  
<span style="color: rgb(0, 153, 0);">/////////////////////////////////////////////////////////////////////////////////////////</span>  
 <span style="color: rgb(0, 153, 0);">//This First bit creates your connection provider and gives it a name</span>  
<span style="color: rgb(0, 153, 0);">//////////////////////////////////////////////////////////////////////////////////////////</span>  
 [ConnectionProvider("Department", "Text")]  
        public ITransformableFilterValues SetConnectionInterface()  
        {  
            return this;  
        }

<span style="color: rgb(0, 153, 0);">//////////////////////////////////////////////////////////////////////////////////////////////////////////</span>  
 <span style="color: rgb(0, 153, 0);">//The following section just lists out the various properties that your connection</span>  
<span style="color: rgb(0, 153, 0);">//can have.  Most of them just return true or false.  Most are self-explanatory.</span>  
 <span style="color: rgb(0, 153, 0);">////////////////////////////////////////////////////////////////////////////////////////////////////////////</span>

        public bool AllowAllValue  
        {  
            get {return true ; }  
         }

        public bool AllowEmptyValue <span style="color: rgb(0, 153, 0);">//This is really useful. It means that you don't have to return a filter value if you don't want to.</span>  
        {  
             get { return true; }  
        }

        public bool AllowMultipleValues  
        {  
            get {return false; }  
        }

<span style="color: rgb(0, 153, 0);">////////////////////////////////////////////////////////////////////////</span>  
 <span style="color: rgb(0, 153, 0);">//This is the name that appears in the settings window</span>  
<span style="color: rgb(0, 153, 0);">//when you connect your web part to another web part</span>  
 <span style="color: rgb(0, 153, 0);">//on the page.  You can use whatever name you want</span>  
<span style="color: rgb(0, 153, 0);">/////////////////////////////////////////////////////////////////////////  </span>      

public string ParameterName  
        {  
            get { return "Drop-down Menu Filter Value"; }  
        }

<span style="color: rgb(0, 153, 0);">////////////////////////////////////////////////////////////////////////////////</span>  
 <span style="color: rgb(0, 153, 0);">//This is where we're actually defining what value gets sent</span>  
<span style="color: rgb(0, 153, 0);">//to the other web part via our connection.  In my case, I had</span>  
 <span style="color: rgb(0, 153, 0);">//a dropdown box called departmentPicker.  I'm sending the </span>  
<span style="color: rgb(0, 153, 0);">//text value of the selected item.  (Notice that I run a quick check</span>  
 <span style="color: rgb(0, 153, 0);">// and if the value is set to the default "Select…" I just return null.</span>  
<span style="color: rgb(0, 153, 0);">//</span>  
 <span style="color: rgb(0, 153, 0);">//I built this from an example that was returning multiple values.</span>  
<span style="color: rgb(0, 153, 0);">//I'm only returning a single value, but I used their approach of</span>  
 <span style="color: rgb(0, 153, 0);">//returning a list which works fine for single values as well.  This</span>  
<span style="color: rgb(0, 153, 0);">//way if I want to return multiple values in the future, I can reuse</span>  
 <span style="color: rgb(0, 153, 0);">//this code and not have to rewrite anything.</span>  
<span style="color: rgb(0, 153, 0);">//////////////////////////////////////////////////////////////////////////////////   </span>     

public System.Collections.ObjectModel.ReadOnlyCollection<string> ParameterValues  
        {  
            get  
            {  
                EnsureChildControls();  
                List<string> department = new List<string>();  
                 if (departmentPicker.SelectedItem.Text == "Select…")<span style="color: rgb(0, 153, 0);">//If it is still set to the default, return null</span>  
                {  
                    return null;  
                 }  
                else  
                {  
                    department.Add(departmentPicker.SelectedItem.Text);<span style="color: rgb(0, 153, 0);">//If it is set to any other value, add that value to our list</span>  
                     System.Collections.ObjectModel.ReadOnlyCollection<string> result = new System.Collections.ObjectModel.ReadOnlyCollection<string>(department);  
                    return result; <span style="color: rgb(0, 153, 0);">//return the filter value</span>  
                 }

            }  
        }

