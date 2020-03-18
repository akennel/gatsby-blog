---
title: Better Recycle Bin Web Part
date: 2020-03-18
featuredImage: './table.png'
---

Gets the Site Collection Recycle Bin and displays it in a sortable/filterable table

<!-- end -->

So one of the great things about SharePoint is that deleted files are sent to a Recycle Bin instead of just being deleted. It makes it easy to recover from mistakes. Unfortunately, the Recycle Bin is sorted by deletion date, and there's not a great way to search for files.

This isn't much a problem on smaller sites, but when you have a large Site Collection and the user calls up needing a file restored and can't remember exactly what the file was named, or when they deleted it, things can get tedious fast.

This is a project that I've adapted from something I built for work. It's a React-based WebPart that you can add to any page in your Site Collection. 

You can download the source or a pre-packaged version [here](https://github.com/akennel/betterrecyclebin)

No configuration is required, just upload the .sppkg file to your App Catalog then drop the WebPart onto a page. On load, it will check if the current user is a Site Collection Admin. If they are, it will do a REST call to get the Site's Recycle Bin, then display the items on a nicely sortable table.

I'm using [React Table v6](https://github.com/tannerlinsley/react-table#readme) to display the results. I started this project just before v7 was released, so haven't migrated yet.

I've used React Table on several projects now, and just love it. It makes it very easy to mark columns as sortable/filterable and it's super simple to override the default simple sorting (which is just string to string). In this case, I'm displaying the Deleted Date as a formatted string, and overriding the filter so you can type any portion of the date and it'll match.

```javascript
{
    Header: 'Deleted',
    accessor: 'Deleted',
    ...
    filterMethod: (filter, row) => {
        let filterDate = moment(row[filter.id]).format("h:mm:ssa MM/DD/YYYY");
        if (filterDate.indexOf(filter.value) >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
```

I'm converting the column data to a formatted string and then searching for that currently. In a future version I'll do the opposite, have the user enter a date via a date picker and then convert that to a date for matching.

I'm also using [PNPJS v2](https://pnp.github.io/pnpjs/) for getting a handle on the Site and RootWeb. I'd love to use it for working with the Recycle Bin, but this version doesn't support the Recycle Bin at all (neither getting deleted items or restoring them), so I'm just making the REST API calls directly.

The only thing even vaguely tricky was the need to get and send an authentication digest when restoring the files.
I adapted the [code](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints) from Microsoft for JavaScript using the Axios library for making the actual call:

```javascript
private async getDigest(){
  return await axios.post(this.state.siteUrl + "/_api/contextinfo", {
    headers: { 'accept': 'application/json;odata=nometadata' },
  }).then(response => {
    return response.data.FormDigestValue;
  });
}
...
let digest = await this.getDigest();
let response = await fetch(this.state.siteUrl + "/_api/site/RecycleBin('" + item.Id + "')/restore()", {headers:{"accept": "application/json", 'X-RequestDigest': digest}, method:"POST"});
```

Actually this is something I need to refactor a bit. I'm using a mishmash of fetch, fetchStream, and axios for making my various API calls. I need to just settle on one and be consistent.
