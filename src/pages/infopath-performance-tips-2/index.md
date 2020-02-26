---
title: Infopath Performance tips #2
date: 2010-08-27
---

In my last post, I mentioned that I'd recently gone through one of my forms and identified several causes of slow performance. I was able to reduce the form's load time from 40 to 2 seconds. Most of that performance gain came from moving file attachments outside the form for storage. I'll be talking about…


<!-- end -->

In my last post, I mentioned that I'd recently gone through one of my forms and identified several causes of slow performance. I was able to reduce the form's load time from 40 to 2 seconds. Most of that performance gain came from moving file attachments outside the form for storage. I'll be talking about how I did that in my next post.   
 Today I'm going to talk about Web Service calls. When I was testing my load times, I found that even the quickest web service call took at least 0.5 seconds. Since my form originally had 7 such calls, that time was really stacking up. I went through my form and eliminated all my Web Service calls that were being called during the On Load event. :

First, I replaced Web Service calls with native APIs whenever possible. For example, I was pulling in information about the current user using the Sharepoint User Profile web service. I replaced this with a call to the User Profile Manager. Here's a snippet where I get the user's Department:  
 ServerContext context = ServerContext.GetContext(myWeb.Site);  
UserProfileManager upMgr = new UserProfileManager(context);  
UserProfile currentProfile = upMgr.GetUserProfile(loginName);  
departmentField.SetValue(currentProfile["Department"].toString());

Some Web Service calls just can't be replaced…so I hid them. For instance, on my form I was contacting our financial system and pulling in the latest budget numbers. This information needed to appear on my form, and the web service was the only way to get at that information. What I did was move the budget information off the default view and put it on a new budget view instead.   
 That eliminated the need to populate the information on the form load. My form already uses [Button Tabs](http://blogs.msdn.com/b/infopath/archive/2006/05/01/tabs.aspx) to move between views. All I had to do was add my Web Service call to the budget tab. That way the budget web service doesn't get called until it is needed. The user doesn't notice the slight delay because the page is being redrawn.   
 You could use the same approach with a hidden section that is displayed by clicking on a button, or selecting a radio option.

