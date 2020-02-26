---
title: New Utility Created – SPFormsMaintenance
date: 2009-04-09
---

I've just posted this to the CodePlex: http://spformsutility.codeplex.com/ It's a utility that I'm running overnight to activate new Infopath forms on our production server. When an existing form is upgrading, IIS is restarted as part of the upgrade process. I've been upgrading our forms on Production with a batch script, and wrote this to handle things…


<!-- end -->

I've just posted this to the CodePlex: [http://spformsutility.codeplex.com/](http://spformsutility.codeplex.com/)

<div></div>
<div>It's a utility that I'm running overnight to activate new Infopath forms on our production server.  When an existing form is upgrading, IIS is restarted as part of the upgrade process.  I've been upgrading our forms on Production with a batch script, and wrote this to handle things more gracefully.</div>
<div></div>
<div>The utility verifies every form it finds, and only processes them if no errors are found.  Once upgraded on the server, the form is archived, and an email is sent to me letting me know what was done.</div>

