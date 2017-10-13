---
title: The View
layout: default
images:
- path: aerial
  title: From the air
- path: green
  title: Rock pool
- path: harbour
  title: Scalasaig harbour
- path: high
  title: Kiloran from on high
- path: kiloran
  title: Kiloran from lower down
- path: paps
  title: The paps of Jura
- path: scalasaig
  title: The village
- path: seil
  title: The view from oronsay
- path: south
  title: Kiloran from the north
- path: stone
  title: Fingal's limpet hammer
- path: sunkiss
  title: A sunset from somewhere
- path: sunset
  title: A sunset at Port Mor
---

<ul class="gallery">
  {% for image in page.images %}
    <li><a href="images/{{ image.path }}.jpeg"><img src="images/{{ image.path }}.jpeg" alt="{{ image.title }}" /></a></li>
  {% endfor %}
</ul>
