---
title: The Corncrake
layout: default
years:
- '2000'
---

<div class="archive">
Back Issues:

{% for year in page.years %}
 <h4>{{year}}</h4>
 <ul>
   {% for post in site.corncrake %}
    {% capture postyear %}{{post.date|date:"%Y"}}{% endcapture %}
    {% if postyear == year %}
     <li><a href="{{post.url|relative_url}}">{{post.title}}</a></li>
    {% endif %}
   {% endfor %}
 </ul>
{% endfor %}

</div>

<h2>Issue {{site.corncrake.last.title}}</h2>

{{site.corncrake.last.content}}
