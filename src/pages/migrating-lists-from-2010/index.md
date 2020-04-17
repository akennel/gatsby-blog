---
title: Migrating 2010 List Attachments to SharePoint Online
date: 2020-04-17
---

What to do when you don't want to use Microsoft's migration tool and you're too cheap to pay for a commercial migration tool

<!-- end -->

We're in the final stages of migration off an old on-prem 2010 server to SharePoint Online. This server was originally upgraded from 2007, so if you use Microsoft's migration tool odd things will happen to your Site Collection. Thankfully the sites we're migrating are generally fairly simple, mostly containing data in lists along with some simple InfoPath forms.

We're migrating the InfoPath forms to PowerApps, and the list data we're migrating by dumping to CSV and uploading. The only missing link has been those lists that contain file attachments. To handle that, I created a simple console app that uses CSOM and PnP. If you've never tried it, the CSOM library will connect to a 2010 server, and (almost) everything works!

One thing that doesn't work on 2010 is the AttachmentFiles property on List Items. But not to worry, there's a work-around that isn't too bad.
You can access a list items attachments using the Folder class passing the item.Id:

```c
Folder attFolder = oldContext.Web.GetFolderByServerRelativeUrl(oldList.RootFolder.ServerRelativeUrl + "/Attachments/" + item.Id);
FileCollection files = attFolder.Files;
```

Once you've loaded the files, you can read their contents using a Memory Stream, and then build out your new FileAttachment for SharePoint Online:

```c
FileInformation f = File.OpenBinaryDirect(oldContext, file.ServerRelativeUrl);
oldContext.ExecuteQuery();

byte[] b = null;
using (Stream stream = f.Stream)
using (MemoryStream ms = new MemoryStream())
{
    int count = 0;
    do
    {
        byte[] buf = new byte[1024];
        count = stream.Read(buf, 0, 1024);
        ms.Write(buf, 0, count);
    } while (stream.CanRead && count > 0);
    b = ms.ToArray();
}

MemoryStream newStream = new MemoryStream(b);
var newAttachment = new AttachmentCreationInformation();
newAttachment.ContentStream = newStream;
newAttachment.FileName = file.ServerRelativeUrl.Substring(file.ServerRelativeUrl.LastIndexOf("/") + 1);
```

SharePoint Online likes the FileAttachments property just fine, so at this point you just add your new attachment.
