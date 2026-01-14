---
layout: page
title: Members
permalink: /members/
---


![Sinitcyn Lab Team Photo]({{ '/assets/images/photo/members.jpg' | relative_url }})
{: style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 2rem;" }

## Leadership
{% for person in site.data.members.leadership %}
<div class="member-card" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  <div class="member-photo" style="flex-shrink: 0;">
    {% if person.photo %}
      <img src="{{ '/assets/images/photo/' | append: person.photo | relative_url }}" alt="{{ person.name }}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; background-color: #f1f5f9;">
    {% else %}
      <img src="{{ '/assets/images/logo/member-placeholder.svg' | relative_url }}" alt="{{ person.name }}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; background-color: #f1f5f9;">
    {% endif %}
  </div>
  <div class="member-details">
    <h3 style="margin-top: 0; margin-bottom: 0.5rem;">{{ person.name }}</h3>
    <p style="margin: 0; font-style: italic; color: #64748b;">{{ person.title }}</p>
    
    <div style="margin-top: 0.5rem;">
      {% assign email_parts = person.email | split: "@" %}
      <span class="email-protect" data-user="{{ email_parts[0] }}" data-domain="{{ email_parts[1] }}"></span>
      {% if person.orcid %} <a href="{{ person.orcid }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/orcid.gif' | relative_url }}" alt="ORCID" style="width: 16px; height: 16px; vertical-align: middle;"></a>{% endif %}
      {% if person.gscholar %} <a href="{{ person.gscholar }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/google_scholar.svg' | relative_url }}" alt="Google Scholar" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.cphof %} <a href="{{ person.cphof }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/cphof.png' | relative_url }}" alt="CPHOF" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.uu %} <a href="{{ person.uu }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/utrecht_university.png' | relative_url }}" alt="Utrecht University" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.linkedin %} <a href="{{ person.linkedin }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/linkedin.png' | relative_url }}" alt="LinkedIn" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
    </div>

    <p style="margin-top: 0.5rem;">{{ person.focus }}</p>
  </div>
</div>
{% endfor %}

## Team
{% for person in site.data.members.team %}
<div class="member-card" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  <div class="member-photo" style="flex-shrink: 0;">
    {% if person.photo %}
      <img src="{{ '/assets/images/photo/' | append: person.photo | relative_url }}" alt="{{ person.name }}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; background-color: #f1f5f9;">
    {% else %}
      <img src="{{ '/assets/images/logo/member-placeholder.svg' | relative_url }}" alt="{{ person.name }}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; background-color: #f1f5f9;">
    {% endif %}
  </div>
  <div class="member-details">
    <h3 style="margin-top: 0; margin-bottom: 0.5rem;">{{ person.name }}</h3>
    <p style="margin: 0; font-style: italic; color: #64748b;">{{ person.title }}</p>
    <p style="margin-top: 0.5rem;">{{ person.focus }}</p>
    {% if person.time %}<p style="margin: 0.25rem 0 0; color: #64748b; font-size: 0.9em;">{{ person.time }}</p>{% endif %}
  </div>
</div>
{% endfor %}

## Alumni
{% for person in site.data.members.alumni %}
<div class="member-card" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  <div class="member-photo" style="flex-shrink: 0;">
    {% if person.photo %}
      <img src="{{ '/assets/images/photo/' | append: person.photo | relative_url }}" alt="{{ person.name }}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; background-color: #f1f5f9;">
    {% else %}
      <img src="{{ '/assets/images/logo/member-placeholder.svg' | relative_url }}" alt="{{ person.name }}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; background-color: #f1f5f9;">
    {% endif %}
  </div>
  <div class="member-details">
    <h3 style="margin-top: 0; margin-bottom: 0.5rem;">{{ person.name }}</h3>
    <p style="margin: 0; font-style: italic; color: #64748b;">{{ person.title }}</p>
    <p style="margin-top: 0.5rem;">{{ person.focus }}</p>
    {% if person.time %}<p style="margin: 0.25rem 0 0; color: #64748b; font-size: 0.9em;">{{ person.time }}</p>{% endif %}
  </div>
</div>
{% endfor %}
