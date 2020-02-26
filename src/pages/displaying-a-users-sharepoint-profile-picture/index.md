---
title: Displaying a User’s Sharepoint Profile Picture
date: 2009-04-22
---

This week I was building a web part and needed to display the profile picture for a user. I figured this would be easy enough to do, but as is usually the case with Sharepoint, I was wrong. Several hours and multiple Google searches later, I put together a neat solution: UserProfileManager profileManager = new…


<!-- end -->

This week I was building a web part and needed to display the profile picture for a user.  I figured this would be easy enough to do, but as is usually the case with Sharepoint, I was wrong.  Several hours and multiple Google searches later, I put together a neat solution:
 
<span style="font-size:85%;"> 

</span><span style="color: rgb(43, 145, 175);font-size:85%;"><span style="color: rgb(43, 145, 175);font-size:85%;">UserProfileManager</span></span><span style="font-size:85%;"> profileManager = </span><span style="color: rgb(51, 51, 51);font-size:85%;"><span style="color: rgb(0, 0, 255);font-size:85%;">new</span></span><span style="color: rgb(51, 51, 51);font-size:85%;"> </span><span style="color: rgb(43, 145, 175);font-size:85%;"><span style="color: rgb(43, 145, 175);font-size:85%;">UserProfileManager</span></span><span style="font-size:85%;">();</span> 

<span style="color: rgb(43, 145, 175);font-size:85%;"><span style="color: rgb(43, 145, 175);font-size:85%;">UserProfile</span></span><span style="font-size:85%;"> userProfile = profileManager.GetUserProfile(loginName);</span>

<span style="color: rgb(0, 0, 0);font-size:85%;"><span style="color: rgb(0, 0, 255);font-size:85%;">try</span></span><span style="font-size:85%;"> </span>

{

pictureURL = userProfile[<span style="color: rgb(163, 21, 21);font-size:85%;"><span style="color: rgb(163, 21, 21);font-size:85%;">“PictureURL”</span></span><span style="font-size:85%;">].Value.ToString();</span>

}

<span style="color: rgb(0, 0, 255);font-size:85%;"><span style="color: rgb(0, 0, 255);font-size:85%;">catch</span></span>

<span style="font-size:85%;"> 

{

pictureURL = <span style="color: rgb(163, 21, 21);font-size:85%;"><span style="color: rgb(163, 21, 21);font-size:85%;">“/_layouts/images/no_pic.gif”</span></span>; 

</span><span style="font-size:85%;">

}

</span>

