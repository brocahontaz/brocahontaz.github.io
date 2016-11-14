---
layout: post
title:  "Code formatting"
date:   2016-11-14 19:48:00 +0100
comments: true
categories: Rooter
tags: HTML CSS Code
desc: Time to test out the formatting of code inside posts
author: Johan
permalink: /blog/:year/:month/:day/:title/
---
A little jQuery toggle script.
{% highlight javascript %}
$(document).ready(function(){
	$(".menu-icon").click(function(){
		$(".responsive").toggle();
	});
}); 
{% endhighlight %}