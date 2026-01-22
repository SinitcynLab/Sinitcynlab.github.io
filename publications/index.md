---
layout: page
title: Publications
permalink: /publications/
---

![Sinitcyn Lab Publications Photo]({{ '/assets/images/photo/uu_flag2.jpg' | relative_url }})
{: .page-banner }

We develop open, reproducible methods for computational mass spectrometry.

<h2>Highlighted Publications</h2>
<div class="publications-list" style="margin-bottom: 3rem;">
{% for paper in site.data.highlighted_publications %}
  <div class="publication-item" style="margin-bottom: 2rem; padding-left: 1rem; border-left: 4px solid var(--accent, #3caea3);">
    <span style="font-weight: bold; font-size: 1.1em;">{{ paper.title }}</span><br>
    <span style="font-size: 0.95em;">{{ paper.authors }}</span><br>
    <span style="font-style: italic; font-size: 0.9em; color: #666;">{{ paper.venue }}</span>
    {% if paper.link and paper.link != "" %}
      <a href="{{ paper.link }}" target="_blank" style="font-size: 0.9em;">[Link]</a>
    {% endif %}
    <ul style="margin-top: 0.5rem; margin-bottom: 0.5rem; color: #555; font-size: 0.95em;">
    {% for point in paper.points %}
      <li>{{ point }}</li>
    {% endfor %}
    </ul>
  </div>
{% endfor %}
</div>

<h2>All Publications</h2>

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
