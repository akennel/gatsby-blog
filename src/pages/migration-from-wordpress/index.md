---
title: Migration from WordPress to MarkDown
date: 2020-02-26
---

I migrated all my posts from my old WordPress site that I'm planning to shut down.

<!-- end -->

I was able to get the content of the posts by calling WordPress's Rest API. I only had a 121 old posts, so it was easy enough to just manually get them from my browser by hitting /wp-json/wp/v2/posts?per_page=100&page=1 then page=2. If I'd had more than 2 pages, I would have scripted this portion.

Once I had my posts, I wrote a C# script to parse the result and then used the really excellent package [Html2Markdown](https://github.com/baynezy/Html2Markdown) to convert the values. Here's the gist of that code:

```c
foreach (Post post in posts.AllPosts)
    {
        var slug = post.slug;
        System.IO.Directory.CreateDirectory(@"c:\temp\pages\" + slug);

        var converter = new Converter();
        var excerptRaw = post.excerpt.rendered;
        var excerptMD = converter.Convert(excerptRaw);
        excerptMD = excerptMD.Replace("<div>", "").Replace("</div>", "");
        var titleRaw = post.title.rendered;
        var titleMD = converter.Convert(titleRaw);
        titleMD = titleMD.Replace("<div>", "").Replace("</div>", "");
        var bodyRaw = post.content.rendered;
        if (bodyRaw.ToLower().Contains("wp-content"))
        {
            bodyRaw = GetImages(bodyRaw, slug);
            bodyRaw = bodyRaw.Replace("href=\"http://", "href=\"https://");
        }
        var bodyMD = converter.Convert(bodyRaw);
        bodyMD = bodyMD.Replace("<div>", "").Replace("</div>", "");
        var date = post.date;
        ...
```

Note that call to the function GetImages() in the middle there. That's where I handle downloading the original images from my old site.
The Html2Markdown package says it has a way to extend the tag conversion process, but I couldn't figure that out, so instead I just created a simple function using the HTMLAgilityPack library:

```c
public static string GetImages(string html, string slug)
{
    var doc = GetHtmlDocument(html);
    var nodes = doc.DocumentNode.SelectNodes("//img");
    if (nodes == null)
    {
        return html;
    }

    nodes.ToList().ForEach(node =>
    {

        var src = node.Attributes["src"].Value;
        var alt = node.Attributes["alt"].Value;
        var title = "";
        try
        {
            title = node.Attributes["title"].Value;
        }
        catch { }

        var localSrc = src.Substring(src.LastIndexOf("/") + 1);

        using (var client = new WebClient())
        {
            client.DownloadFile(src, @"c:\temp\pages\" + slug + @"\" + localSrc);
        }

        var markdown = string.Format(@"![{0}]({1}{2})", alt, "./" + localSrc, (title.Length > 0) ? string.Format(" \"{0}\"", title) : "");

        ReplaceNode(node, markdown);
    });

    return doc.DocumentNode.OuterHtml;
}
```

This is largely taken from the Html2Markdown's function that processes images. I just added the bit in the middle where we download a copy of the image to the local folder for the new post and then update the link.

All in all it was a fun task. There's still a lot of HTML that snuck through the conversion, and some code that wasn't properly set off with back-ticks, but I'm happy with how quickly this came together.
