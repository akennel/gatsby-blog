---
title: Working with GridView
date: 2009-02-09
---

I was asked by our VP to create a simple web part that could display all the birthdays in the current month. This was a simple enough project, so I quickly coded it up, and showed it to our Dev. He pointed out that I had used Labels to add my names and birthdays to…


<!-- end -->

I was asked by our VP to create a simple web part that could display all the birthdays in the current month.

<div>This was a simple enough project, so I quickly coded it up, and showed it to our Dev.  He pointed out that I had used Labels to add my names and birthdays to the web part and that it would make more sense to use a GridView.</div>
<div></div>
<div>That made sense, so I rewrote the web part.  When I displayed it, I thought my columns were too close together.  Now GridView gives you two ways to set column spacing .CellPadding and .CellSpacing.  Both of these affect all four directions: top, bottom, left and right.  I wanted just to set left or right, but couldn’t find any way to do that.  </div>
<div></div>
<div>I did a search, and found several people asking the same question, and the advice that came back was to set the column spacing in CSS.  That didn’t make me happy, as I prefer to keep everything in code so it is simpler to roll out later.  I know, I know, CSS should be used for layout, but that really doesn’t make sense for a web part that is meant to be reused multiple times.</div>
<div></div>
<div>I asked our dev for more advice and he said, just set the padding to the individual cells.  Bingo!  I wrote the following to loop through all my cells in the first column and add some padding:</div>
<div> for (int x = 0; x < displayGrid.Rows.Count; x++)</div>
<div>{</div>
<div>displayGrid.Rows[x].Cells[0].Attributes.CssStyle.Add(HtmlTextWriterStyle.PaddingRight, “20px”);</div>
<div>}</div>
<div></div>
<div> That’s a simple way to add some horizontal spacing to a GridView without affecting your Vertical spacing.</div>
<div></div>

