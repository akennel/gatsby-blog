---
title: Strange user account problem
date: 2008-04-21
---

Our developer ran into a problem with one of his applications last week. One of the people trying to use the application was running into an error. This application is just a simple ASPX form that is filled out by the user. A bit of digging in the logs revealed that the application was pulling…


<!-- end -->

Our developer ran into a problem with one of his applications last week. One of the people trying to use the application was running into an error. This application is just a simple ASPX form that is filled out by the user. A bit of digging in the logs revealed that the application was pulling the wrong username for the user.

A bit more digging and we discoverd the following: The user logs in with their AD account, DomainJane.Doe. Their user profile in Shared Services matches this account name. However, if you bring up My Settings from the Welcome Jane Doe menu item that appears at the top of every Sharepoint page, the users account is listed as DomainDoe. This is the account name that our broken application is trying to use. 

I’ve been unable to find where the server is coming up with this name. I’ve even gone into the SQL databases and searched, but DomainJane.Doe is all that comes back. I’m about to open a case with Microsoft.

