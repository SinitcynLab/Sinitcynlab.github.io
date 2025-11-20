---
layout: page
title: Members
permalink: /members/
---

## Leadership
{% for person in site.data.members.leadership %}
- **{{ person.name }}** — {{ person.title }}  
  Focus: {{ person.focus }}  
  Email: [{{ person.email }}](mailto:{{ person.email }})
{% endfor %}

## Team
{% for person in site.data.members.team %}
- **{{ person.name }}** — {{ person.title }}  
  Focus: {{ person.focus }}
{% endfor %}

## Alumni
{% for person in site.data.members.alumni %}
- **{{ person.name }}** — {{ person.title }}  
  Focus: {{ person.focus }}
{% endfor %}
