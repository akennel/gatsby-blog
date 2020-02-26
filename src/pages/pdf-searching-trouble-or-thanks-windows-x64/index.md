---
title: PDF Searching Trouble or Thanks Windows x64!
date: 2008-02-15
---

VP noticed that PDF files weren’t being indexed on the production servers. This is something I’d looked at when I was fist setting up the servers, but hadn’t revisited since then. Mea Culpa. I had time yesterday afternoon to track down the answer. It turns out our problem is caused by running Windows Server x64….


<!-- end -->

<div>VP noticed that PDF files weren’t being indexed on the production  servers.  This is something I’d looked at when I was fist setting up the  servers, but hadn’t revisited since then.  Mea Culpa.</div>
<div> </div>
<div>I had time yesterday afternoon to track down the answer.  It turns out our  problem is caused by running Windows Server x64.  The iFilter that Adobe provides  will only run on an x32 OS.


</div>
<div> </div>
<div>Luckily, a third party has created their own PDF iFilter for x64.  They’re  the same people who put out the Foxxit PDF reader that I’ve been using for  years.  The only drawback is that they charge for commercial use.  Since the  cost is under $800, I don’t think this will be a problem.</div>
<div> </div>
<div>Following the exellent instructions [here](http://blogs.msdn.com/ifilter/archive/2007/05/10/long-awaited-64-bit-pdf-ifilter-finally-available.aspx), I went ahead and installed the iFilter on the search server, and it’s working  perfectly.</div>

