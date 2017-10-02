---
title: The Corncrake
layout: default
---

<div class="archive">
Back Issues:
<ul>
  {% for post in site.corncrake %}
    <li><a href="{{post.url|relative_url}}">{{post.title}}</a></li>
  {% endfor %}
</ul>
</div>

<div class="issue">
  <h2>Issue {{site.corncrake.last.title}}</h2>
  {{site.corncrake.last.content}}
</div>
