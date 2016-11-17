---
layout: page
title: BLOG
permalink: /blog/
desc: Latest thoughts and news
linkdesc: Latest news about my work and studies
description: Latest news about my work and studies
---
<div class="horizontal-center">
<ul class="blog-categories">
{% for tag in site.tags %}
	<li>
		{{ tag | first }}
	</li>
{% endfor %}
</ul>
</div>
<ul class="post-list">
{% for post in site.posts %}
<li>
	<span class="post-meta">
		<i class="fa fa-calendar" aria-hidden="true"></i>
		{{ post.date | date: "%b %-d, %Y"}} 
		<i class="fa fa-clock-o" aria-hidden="true"></i>
		{{ post.date | date: "%H:%M"}}
	</span>

        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        <p class="desc">
        	{{post.desc}}
    	</p>
    	<div class="tags">
            <span class="head">Tags:</span>
        		{% for tag in post.tags %}
        		{{ tag }}
        		{% endfor %}
    	</div>
</li>
{% endfor %}
</ul>