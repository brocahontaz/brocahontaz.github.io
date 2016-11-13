---
layout: page
title: BLOG
permalink: /blog/
desc: Latest thoughts and news
linkdesc: Latest news about my work and studies
---
<div class="horizontal-center">
<ul class="blog-categories">
{% for category in site.categories %}
	<li>
		{{ category | first }}
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
    	<p class="author">
        	<i>
        		{% for category in post.categories %}
        		{{ category }}
        		{% if forloop.last == false %}
        		/
				{% endif %}
        		{% endfor %}
        	</i>
    	</p>
</li>
{% endfor %}
</ul>