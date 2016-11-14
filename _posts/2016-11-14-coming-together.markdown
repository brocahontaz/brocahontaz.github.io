---
layout: post
title:  "Coming together"
date:   2016-11-14 15:47:00 +01:00
comments: true
categories: Rooter
tags: Rooter UDM Linnéuniversitetet HTML CSS Jekyll Sass
desc: Well then, the site is finally starting to come together as something I feel fairly proud of.
author: Johan
permalink: /blog/:year/:month/:day/:title/
---
## Customized
I feel the choice of building my own design/layout from scratch was a good idea even now in hindsight. It's been great, inspiring fun to figure out how I want THE site about me - and basically myself - to be presented.
Also, taking all my past knowledge with me, and using a - for me - new way of web developing with Jekyll and Sass has taught me a great deal. And, of course, has been very inspiring and enjoyable that too.

And, to be honest, I have never really felt comfortable just using premade templates/themes and such. My passion is creating new design/layouts on my own. So, I'm really happy that this turned out so - in my opinion - good. 
There's always room for improvement, of course. But this feels like a solid ground to build upon.

### Responsiveness
As I myself am a very avid user of the interwebz even when a smartphone is my platform, the decision to make this site fully responsive was a no-brainer. All in all the testing in a couple of different browsers, using the 
pliable design mode in Firefox and of course browsing the site on my own smartphone is implying that it works as intended. I am really happy about how the navigation menu I made turned out on smaller devices.

### Things left to do
The code probably needs to be looked over a couple of times, and possibly cleaned up a bit. Mainly to get rid of eventual redudance that might have slipped through during the development. Could be that I should split
the sass-files more, to further enhance the overview. And add a couple of more different layout files. This feels like a "last step" when everything else is basically done, though.

What more, is that the [contact][contact] form needs to be added. Nothing too complex about that, should go fairly quick to add. The page for [projects][projects] is a thinker, though. I am still not entirely sure how I want it layed out and presented.
But it will come; and doesn't need to be something too spaced out, either.

Oh, and I need to figure out what I want to do with categories and/or tags for the blog. As of now, I have chosen to only use and display tags. And possibly using categories for different projects..? Anyway, some sort of sorting/display of the categories and/or tags will need to be addded. 

I also noticed, while making this blog post, that I may have to reconsider the sizes of headers, to diversify them more.

##### Bugs?
Regarding bugs, the only one I have discovered so far has to do with the responsive menu (yes, the one I mentioned earlier that I am so proud of.. touché eh?). 

When using the site on a smaller screen or window size, you get the responsive menu. An icon you press to display, and hide, the menu. If you do this and then, for some reason, get a larger window size that would normally show the regular desktop menu - it (the menu) won't show. This is because of the jQuery toggle function I have used on the menu for smaller devices. Hence, if you hide the menu - it will stay hidden even if the desktop menu toggles on. Logical, since it has been toggled "off".

Not a big, el grande, bug. But nevertheless.

I do know of the solution to this, though. It's a simple check in my jQuery script that resets the toggle based on the current window/screen size that needs to be added. Only a few LOC. I just have yet to add it.

## All in all
..the final release is growing closer. The things left to do are mostly minor "problems" to be solved. So, it shouldn't be long now. Stay tuned!

[contact]: /contact
[projects]: /projects