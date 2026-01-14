---
layout: page
title: Publications
permalink: /publications/
---

We develop open, reproducible methods for computational mass spectrometry.

<div class="publications-list">
{% for paper in site.data.publications %}
  <div class="publication-item" style="margin-bottom: 0.5rem;">
    <span style="font-weight: bold;">{{ paper.title }}</span><br>
    <span style="font-size: 0.95em;">{{ paper.authors }}</span><br>
    <span style="font-style: italic; font-size: 0.9em; color: #666;">{{ paper.venue }}</span>
    {% if paper.link and paper.link != "" %}
      <a href="{{ paper.link }}" target="_blank" style="font-size: 0.9em;">[Link]</a>
    {% endif %}
  </div>
{% endfor %}
</div>
