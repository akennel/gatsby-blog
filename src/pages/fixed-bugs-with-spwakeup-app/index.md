---
title: Fixed bugs with SPWakeUp app
date: 2008-03-06
---

After running it overnight on the production box, I realized I had some problems. Watching it closely, I discovered two things, 1) It couldn’t handle URLs with spaces, and 2) It was mangling some of the addresses. A quick look at how Sharepoint handles addresses showed that it replaces any spaces it finds with %20….


<!-- end -->

After running it overnight on the production box, I realized I had some problems. Watching it closely, I discovered two things, 1) It couldn’t handle URLs with spaces, and 2) It was mangling some of the addresses.

A quick look at how Sharepoint handles addresses showed that it replaces any spaces it finds with %20. This made for an easy fix, using the command string.Replace(” “,”%20”);

The second problem was a bit trickier. I had been using the TrimEnd method to look for the XML tag, but I didn’t understand how TrimEnd works. Instead of just removing the first instance of each letter, it kept going until it ran into a letter that it wasn’t supposed to remove. The result was that sites whose URLs ended with an e were having that character stripped.

The fix was very simple. Since the URL always ends with the same tag, and the tag is always 9 characters long, I just removed the last 9 characters: cmd_output.Remove((stringlength -9));

That fixed my two bugs, and everything is now testing OK.

But that led me to another problem: the whole point of my application was to actually open each web site, which would require the server to rebuild the site, thereby getting it back in cached memory. But my code wasn’t really opening the site.

Here’s where my lack of coding for the last few years was hurting me. I’d found the addresses, and I’d built the HTTP request, but my code never actually contacted the site! Oops. I did a little more fishing with Google, and came across [a great explanation](http://www.nonsequiturs.com/posts/Perform_an_HTTP_GET_Using_CSharp) of exactly how to build HTTP requests. Once I understood a little better what I was doing, my error became obvious.

I ended up stealing the code used by the example, and decided to send the resulting HTML code to the console. Now that I had everything put together, I rebuilt my .exe and ran everything again. Success! It’s especially nice to be able to see the full content of each page as a verification that the request is actually working properly.

