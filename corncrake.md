---
title: The Corncrake
layout: default
---

<div class="archive">
Back Issues:

2000

<ul>
  {% for post in site.corncrake %}
  {% if 2000-01-01<=post.date<=2000-12-31 %}
    <li><a href="{{post.url|relative_url}}">{{post.title}}</a></li>
  {% endif %}
  {% endfor %}
</ul>

</div>

<h2>Issue {{site.corncrake.last.title}}</h2>

{{site.corncrake.last.content}}
