---
title: Infopath forms and hidden buttons
date: 2008-09-16
---

I’ve been building some forms for a site called Emergency Preparedness this week. One of the things I wanted to do with the form was get rid of the button bar at the top and bottom and replace them with a couple of simple buttons. I decided I wanted a button that said Submit when…


<!-- end -->

<span style="font-family:sans-serif;font-size:85%;">I’ve been building som</span><span style="font-family:sans-serif;font-size:85%;">e forms for a site called Emergency Preparedness this week. One of the things I wanted to do with the form was get rid of the button bar at the top and bottom and replac</span><span style="font-family:sans-serif;font-size:85%;">e them with a couple of simple buttons. I decided I wanted a button that said Submit when someone first created out a document, and Save Changes when they were editing an existing document. It wasn’t immediately obvious how to do this, so I wanted to write down how I accomplished it.</span>

<div dir="ltr">
<div><span style="font-family:sans-serif;font-size:85%;">I started by creating two new fields for my form called NewDocument and FileName.  I didn’t add these to the layout of the form, so they won’t appear when creating a document.  Next I added two buttons, side by side at the bottom of the form, one labelled Submit, the other Save Changes.</span>  
[![](http://turtlemafia.org/wp-content/uploads/2008/09/noname.gif)](http://turtlemafia.org/wp-content/uploads/2008/09/noname.gif)

<span style="font-family:sans-serif;font-size:85%;">I set the Submit button to be invisible when the field NewDocument was</span><span style="font-family:sans-serif;font-size:85%;"> set to “No”. I set the Sav</span><span style="font-family:sans-serif;font-size:85%;">e Change button to be invisible when the field NewDocument was set to anything other than “No”.</span>  
[![](http://turtlemafia.org/wp-content/uploads/2008/09/2-300x61.gif)](http://turtlemafia.org/wp-content/uploads/2008/09/2.gif)

<span style="font-family:sans-serif;font-size:85%;">I then created a submit option for the form that pointed to the document library I wanted to use, and set the file name to value of the field FileName. I made sure to check the Allow overwrite if file exists box.</span>  
[![](http://turtlemafia.org/wp-content/uploads/2008/09/3-300x81.gif)](http://turtlemafia.org/wp-content/uploads/2008/09/3.gif)

<span style="font-family:sans-serif;font-size:85%;">Now it was time to wire up the buttons. On the Submit button, I set the following </span><span style="font-family:sans-serif;font-size:85%;">rules:</span>  
[![](http://turtlemafia.org/wp-content/uploads/2008/09/4.gif)](http://turtlemafia.org/wp-content/uploads/2008/09/4.gif)

<span style="font-family:sans-serif;font-size:85%;">Notice that clicking this button sets the FileName field to the current date+time. I’ll probably up</span><span style="font-family:sans-serif;font-size:85%;">date this to include some information from other fields or the submitter’s name, but using the now() option ensures I get a unique file name. The button then sets the NewDocument field to No and then submits the form using the submit option I’ve already created.</span>  
[![](http://turtlemafia.org/wp-content/uploads/2008/09/5.gif)](http://turtlemafia.org/wp-content/uploads/2008/09/5.gif)

<span style="font-family:sans-serif;font-size:85%;">Less happens on the Save Changes button because all we’re doing is saving an existing document. Remember that our Submit option pulls the name of the file from the field FileName. This field was set when the document was first created, so we end up using the same file name…which means that we overwrite the existing file.</span>

<span style="font-family:sans-serif;font-size:85%;">So we end up with a form that displays the Submit button when it is first created, and Save Changes every time it is opened after that. </span>  
<span style="font-family:sans-serif;font-size:85%;">This isn’t the only way to do this, of course. You could create a single button, and then use conditional formatting to change the text shown on the button, and the rules that run when the button is pressed. For that matter, I don’t really need the NewDocument field, instead I could key off of whether the FileName field was blank. </span>

<span style="font-family:sans-serif;font-size:85%;">But, I like this approach because it is simple, and easy to follow.  It should be easy for anyone to look at it and figure out how it all works if something needs to be updated in the future.</span></div>


</div>

