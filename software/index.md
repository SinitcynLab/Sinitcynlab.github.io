---
layout: page
title: Software
permalink: /software/
---

![Sinitcyn Lab Software Photo]({{ '/assets/images/photo/software.jpg' | relative_url }})
{: .page-banner }

In mass spectrometry, even the best experiments produce complex data, so "garbage in, garbage out" is always lurking in the background. So we spend our days sorting signals from noise with a smile.

<div class="software-list" style="margin-top: 2rem;">
{% for tool in site.data.software %}
  <div class="software-card" style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: 12px; background: #fff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <h3 style="margin-top: 0; margin-bottom: 1rem;">{{ tool.name }}</h3>
    
    {% if tool.illustration %}
      <div style="margin: 0 auto 1.5rem; max-width: 600px;">
        <img src="{{ '/assets/images/photo/' | append: tool.illustration | relative_url }}" alt="{{ tool.name }} illustration" style="width: 100%; height: auto;">
      </div>
    {% endif %}
    
    <p style="margin-bottom: 1rem; margin-top: 0;">{{ tool.description }}</p>
    
    <div style="margin-bottom: 1rem;">
      {% for tag in tool.tags %}
        <span style="display: inline-block; padding: 0.2rem 0.6rem; margin-right: 0.5rem; margin-bottom: 0.5rem; background: var(--bg-alt); border-radius: 999px; font-size: 0.85rem; color: var(--muted);">{{ tag }}</span>
      {% endfor %}
    </div>

    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      {% if tool.github %}
        <a href="{{ tool.github }}" target="_blank" class="cta" style="margin-top: 0; padding: 0.5rem 1.25rem; font-size: 0.9rem;">Code</a>
      {% endif %}
      {% if tool.preprint %}
        <a href="{{ tool.preprint }}" target="_blank" class="cta" style="margin-top: 0; padding: 0.5rem 1.25rem; font-size: 0.9rem;">Preprint</a>
      {% endif %}
      {% if tool.highlight %}
        <a href="{{ tool.highlight }}" target="_blank" class="cta" style="margin-top: 0; padding: 0.5rem 1.25rem; font-size: 0.9rem;">Highlight</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>
