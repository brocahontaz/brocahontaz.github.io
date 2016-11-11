---
layout: page
title: BLOG
permalink: /blog/
desc: Latest thoughts and news
linkdesc: Latest news about my work and studies
---
<ul class="post-list">
{% for post in site.posts %}
<li>
	<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        {{post.desc}}
        {{post.categories}}
</li>
{% endfor %}
</ul>