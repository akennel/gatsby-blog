---
title: Yet another Random Image rewrite
date: 2008-09-08
---

Hopefully, this will be the last.  I've been getting a Virtual Machine running on my laptop for dev work.  This way I won't need to cycle IIS on our shared test server so often, which was starting to annoy people.   I had a bit of trouble migrating what I'd already written to Visual Studio…


<!-- end -->

<div dir="ltr">Hopefully, this will be the last.  I've been getting a Virtual Machine running on my laptop for dev work.  This way I won't need to cycle IIS on our shared test server so often, which was starting to annoy people.  



I had a bit of trouble migrating what I'd already written to Visual Studio on my new virtual server, so I just created a new web part and pasted my code in.  I did a bit of house-cleaning on what I'd written.  The biggest change was getting rid of an array I'd been using to store the filenames of all the images.  I reasoned that this would slow things down if the web part was pointed to a library with hundreds of images.  Now I'm just getting a count total and grabbing one at random. 
Here's the snippet in question:


                        Random randomnumber = new Random();
                        pic = randomnumber.Next(allItems.Count);
                        image = siteaddress + "/" + (string)allItems[pic].Url; 

I've also added a new bit that sets the images Alt tag to the Title of the image.  I wanted to do something with the URL that the image links to, but I have figured that one out yet.

You can download a copy from [http://www.codeplex.com/randomimage2](http://www.codeplex.com/randomimage2)



