---
title: The View
layout: default
images:
- path: kiloran
  title: Kiloran in the sun
- path: logs
  title: Fresh sawn wood
- path: sunset
  title: A sunset at Port Mor
- path: kilorain
  title: Kiloran not in the sun
- path: sawmill
  title: The abandoned estate sawmill
- path: garden
  title: The community garden

---

<ul class="gallery">
  {% for image in page.images %}
    <li><a href="images/{{ image.path }}.jpeg"><img src="images/{{ image.path }}.jpeg" alt="{{ image.title }}" /></a></li>
  {% endfor %}
</ul>
