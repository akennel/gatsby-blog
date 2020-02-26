---
title: More thoughts on Traveler
date: 2008-02-26
---

We installed Traveler on our test server yesterday, and installed the client software on a Windows Mobile device overnight.The server install is very simple, just a few minutes start to finish. You also need to make two network ports available from the Internet: 80 – to retrieve the client software, and 8642(default) – which is…


<!-- end -->

We installed Traveler on our test server yesterday, and installed the client software on a Windows Mobile device overnight.  
The server install is very simple, just a few minutes start to finish. You also need to make two network ports available from the Internet: 80 – to retrieve the client software, and 8642(default) – which is the port used to push data to the client.  
The install software gives you the option to install the client software on a seperate server from the push server. Say, if you already have an outward facing web server that you want to use. We let it install everything on the test server. As a nice touch, the installer made the client download page the default page for the server.

Configuration of the Traveler server happens in the Server document. 8.0.1 adds a new Traveler tab in the server document design. It surprised me that this new tab was in the top level, and not a subtab off the Server Tasks. This is the first new top level tab I can remember since v6. Traveler runs as an add-in task on the server called Traveler.

Configuration is pretty simple, and there isn’t much you can do beyond max messages size, and some memory usage limits. I didn’t see any way to set up configuration groups, ala Blackberry. 

The client install is just as simple. You browse to the Traveler server via your handheld. You’re given a choice of the various supported Windows Mobile flavors: Windows Mobile and Smartphone v5 and v6. Once you install the client software, it asks for your Login name and Password (Traveler uses your HTTP/Sametime password), and the address of the Traveler server. You’re then asked what items you want to synch. Because this was a test server, our initial synch took just a few seconds.   
Everything seems to run as advertised so far.

