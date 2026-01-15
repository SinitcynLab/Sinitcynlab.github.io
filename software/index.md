---
layout: page
title: Software
permalink: /software/
---

We are committed to open science and sharing our computational tools with the community. Below is a list of software solutions developed and maintained by our group.

<div class="software-list" style="margin-top: 2rem;">
{% for tool in site.data.software %}
  <div class="software-card" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: 12px; background: #fff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <h3 style="margin-top: 0; margin-bottom: 0.75rem;">{{ tool.name }}</h3>
    <p style="margin-bottom: 1rem;">{{ tool.description }}</p>
    
    <div style="margin-bottom: 1rem;">
      {% for tag in tool.tags %}
        <span style="display: inline-block; padding: 0.2rem 0.6rem; margin-right: 0.5rem; margin-bottom: 0.5rem; background: var(--bg-alt); border-radius: 999px; font-size: 0.85rem; color: var(--muted);">{{ tag }}</span>
      {% endfor %}
    </div>

    {% if tool.github %}
      <a href="{{ tool.github }}" target="_blank" class="cta" style="margin-top: 0; padding: 0.5rem 1.25rem; font-size: 0.9rem;">View on GitHub</a>
    {% endif %}
  </div>
{% endfor %}
</div>
