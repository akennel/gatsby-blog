---
title: Fixed a bug with Random Image Web Part
date: 2008-09-03
---

The original version didn't work with image libraries located in sub-site collections. (Any site collection that wasn't the root site collection)  This isn't a problem with my production server, because everything on that server is held in one site collection.  It was breaking on our test servers though, where we've used multiple site collections to…


<!-- end -->

<div dir="ltr">
<div>The original version didn't work with image libraries located in sub-site collections. (Any site collection that wasn't the root site collection)  This isn't a problem with my production server, because everything on that server is held in one site collection.  It was breaking on our test servers though, where we've used multiple site collections to keep design changes from bleeding over.  </div>
<div></div>
<div>The fix was very simple, and that was to pull the name of the current site collection, and use that to build the URL.  </div>
<div>Here are the 2 lines of code that made the fix:</div>
<div>I added this line:</div>
<div>string collection = SPContext.Current.Site.Url;</div>
<div>Then updated the string called image to include the site collection in the URL.</div>
<div>string image = collection + "/"+ (string)imagelist[pic];</div>
<div></div>
<div>I'm finding that a major drawback of the Smart Part is that you seem to loose the ability to attach the debugger.  That makes fixing fiddly little problems like this more difficult, as you're reduced to trial and error. </div>
<div></div>
<div>(Or am I wrong about not being able to attach the debugger to my process?  Anyone know?)</div>
</div>

