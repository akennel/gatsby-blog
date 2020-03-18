---
title: Better Recycle Bin Web Part
date: 2020-03-18
---

Gets the Site Collection Recycle Bin and displays it in a sortable/filterable table

<!-- end -->

This is a project that I've adapted from something I built for work. It's a React-based WebPart that you can add to any page in your Site Collection. This was created for SharePoint Online. I assume it will work for and On-Prem server, but don't have a way to test that.

You can download the source or a pre-packaged version [here](https://github.com/akennel/betterrecyclebin)

No configuration is required, just upload the .sppkg file to your App Catalog then drop the WebPart onto a page. On load, it will check if the current user is a Site Collection Admin. If they are, it will do a REST call to get the Site's Recycle Bin, then display the items on a nicely sortable table.

I've using [React Table v6](https://github.com/tannerlinsley/react-table#readme) I started this project just before v7 was released, so haven't migrated yet.

I've used React Table on several projects now, and just love it. It makes it very easy to mark columns as sortable/filterable and even lets you override the default simple sorting (which is just string to string). In this case, I'm displaying the Deleted Date as a formatted string, and overriding the filter so you can type any portion of the date and it'll match. 

I'm also using [PNPJS v2](https://pnp.github.io/pnpjs/) for getting a handle on the Site and RootWeb. I'd love to use it for working with the Recycle Bin, but this version doesn't support that yet, so I'm just making the REST API calls directly.

The only thing even vaguely tricky was need to get get and send an authentication digest when restoring the files. 
I adapted the [code](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints) from Microsoft for JavaScript using the Axios library for making the actual call:

```javascript
private async getDigest(){
return await axios.post(this.state.siteUrl + "/_api/contextinfo", {
    headers: { 'accept': 'application/json;odata=nometadata' },
}).then(response => {
    return response.data.FormDigestValue;
});
}
```

Actually this is something I need to refactor a bit. I'm using a mishmash of fetch, fetchStream, and axios for making my various API calls. I need to just settle on one and be consistent.
