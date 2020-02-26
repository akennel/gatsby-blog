---
title: Portal login problems
date: 2008-02-07
---

We resolved a login problem this morning. The user was unable to login to the Questionaire site. It turned out that she was mistyping her domain, but it was hard to figure out what was going wrong until we got her on a webex session. This wasn’t much of a problem, but it points out…


<!-- end -->

We resolved a login problem this morning. The user was unable to login to the Questionaire site. It turned out that she was mistyping her domain, but it was hard to figure out what was going wrong until we got her on a webex session.

This wasn’t much of a problem, but it points out a major flaw: our AD is weak. It grew organically as various hospitals created their own networks, using their own naming conventions. 

Now we have a mess of 50+ AD structures. There’s a trust relationship, so we can use them for logins, but nothing is consistent. So some people are first.last, some are initials, some are named by job title! You never can tell.

We tried to push out our portal address to the Intranet Site list on everyone’s machine. When it works, it means that people don’t have to login via their browser. But it only works about half the time. In today’s case, it was broken, so she was trying to login manually.

It’s going to be a struggle as we move forward. Every time we roll out a new application, we get a small flood of “I can’t login!” problems. I have some documentation on how to update the Intranet setting manually, but I wish we didn’t have to use them.

