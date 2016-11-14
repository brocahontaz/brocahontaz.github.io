---
layout: post
title:  "Minor fixes"
date:   2016-11-14 20:20:00 +0100
comments: true
categories: Rooter
tags: HTML CSS jQuery Code
desc: Took care of some minor bugs and details
author: Johan
permalink: /blog/:year/:month/:day/:title/
---

Decided it was time to fix some minor stuff that has been bugging me.

I fixed the "bug" with the responsive menu, mentioned in an earlier blog post. It now shows properly at all times, even when resizing the window to make the "mobile" menu pop up, and then reverting back to desktop size. Before, toggling off the menu while in the "mobile" version made the menu disappear if the window size was restored back to desktop proportions. That is now taken care of.

Below, I give you an example of how this menu solution can be made in simple jQuery.

{% highlight javascript %}
$(document).ready(function(){
	$(".menu-icon").click(function(){
		$(".responsive").toggle();
	});
	$(window).on("resize", function () {
		if ($(window).width() > 670) {
			$(".responsive").show();
		} else {
			$(".responsive").hide();
		}
	});
});
$(window).on("load", function () {
	if ($(window).width() > 670) {
		$(".responsive").show();
	} else {
		$(".responsive").hide();
	}
});
{% endhighlight %}