---
title: Using Queries to open files
date: 2009-07-17
---

This is pretty basic information, but I had trouble finding a simple code snippet outlining how this works. Here is super short snippet that finds and opens a file by its Title field.

<!-- end -->

This is pretty basic information, but I had trouble finding a simple code snippet outlining how this works. Here is super short snippet that finds and opens a file by its Title field.

```c
//Begin by opening your List  
 SPList docList = web.Lists[“Requests”];

//Build your query. In this example, fileName is the name of a file we’re already saved to the list  
 SPQuery query = new SPQuery();  
 query.Query = “<FieldRef Name=’Title’ />” + fileName + “”;

//Now use your query to pull all the matching documents from our list.  
 SPListItemCollection listItemColl = docList.GetItems(query);

//In this example, we’re assumign that we’ll always only get a single document back.  
 //In practice, you should check listItemColl.Count to ensure that you’re finding the doc.  
 SPListItem listItem = listItemColl.List.Items[0];
```

The meat of the snippet is the Query string: ```<FieldRef Name=’Title’ />” + fileName + ”```
 I’d highly recommend downloading U2U’s CAML Builder to simplify building your query. Just remember to strip out the tag U2U’s tool likes to insert.
