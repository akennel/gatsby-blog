---
title: Migrating content from SharePoint to WordPress
date: 2014-08-22
---

We are currently migrating several sites that were originally built on SharePoint 2007 to WordPress. Last week I worked with a co-worker to build a couple of scripts to migrate our existing content. The script was originally just going to be a way to migrate a document library full of PDF files while preserving metadata…


<!-- end -->

We are currently migrating several sites that were originally built on SharePoint 2007 to WordPress. Last week I worked with a co-worker to build a couple of scripts to migrate our existing content.

The script was originally just going to be a way to migrate a document library full of PDF files while preserving metadata tags. After getting that first bit working, we looked at the page content and realized that it could pretty easily be transferred also, so we added that.

We ended up with 2 scripts, this first was written in C# and used the native SharePoint API to crawl through the various lists, extracting the tags to a CSV file and saving a copy of the PDF files. We grabbed the page content from the orginal ASPX documents and saved it as HTML. The CSV linked all our exported docs to their original tags.

The second script was written in PHP and read in the CSV, then uploaded the PDFs to our WordPress media library and recreated the original tags. Then it created new posts for each of the exported pages. The nifty bit here was that we parsed the links in our HTML in our new posts and updated the addresses to point to the new addresses.

