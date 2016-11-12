---
layout: page
title: BLOG
permalink: /blog/
desc: Latest thoughts and news
linkdesc: Latest news about my work and studies
categories: [Rooter, Linnéuniversitetet]
---
<ul class="blog-categories">
{% for category in site.categories %}
	<li>
		{{ category | first }}
	</li>
{% endfor %}
</ul>
<ul class="post-list">
{% for post in site.posts %}
<li>
	<span class="post-meta">{{ post.date | date: "%b %-d, %Y / %H:%M"}}</span>

        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        <p class="desc">
        	{{post.desc}}
    	</p>
    	<p class="author">
        	Posted by <b>{{post.author}}</b> in <i>{{post.categories}}</i>
    	</p>
</li>
{% endfor %}
</ul>