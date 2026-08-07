---
layout: page
title: Members
permalink: /members/
---


<div id="team-carousel" style="position: relative; width: 100%; margin-bottom: 2rem; overflow: hidden; border-radius: 8px;">
  <div class="carousel-track" style="display: flex; transition: transform 0.8s ease-in-out;">
    <img src="{{ '/assets/images/photo/members_dec2025.jpg' | relative_url }}" alt="Sinitcyn Lab Team Photo" style="width: 100%; flex-shrink: 0; height: auto; display: block;">
    <img src="{{ '/assets/images/photo/members_may2026.jpg' | relative_url }}" alt="Sinitcyn Lab Team Photo May 2026" style="width: 100%; flex-shrink: 0; height: auto; display: block;">
  </div>
  <div style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px;">
    <span class="carousel-dot" data-index="0" style="width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.9); cursor: pointer; display: inline-block;"></span>
    <span class="carousel-dot" data-index="1" style="width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.4); cursor: pointer; display: inline-block;"></span>
  </div>
</div>
<script>
(function() {
  var current = 0;
  var total = 2;
  var track = document.querySelector('#team-carousel .carousel-track');
  var dots = document.querySelectorAll('#team-carousel .carousel-dot');
  function goTo(index) {
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d, i) {
      d.style.background = i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)';
    });
  }
  dots.forEach(function(d) {
    d.addEventListener('click', function() { goTo(parseInt(this.dataset.index)); });
  });
  setInterval(function() { goTo((current + 1) % total); }, 5000);
})();
</script>

## Leadership
{% for person in site.data.members.leadership %}
<div class="member-card" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  <div class="member-photo" style="flex-shrink: 0;">
    {% if person.photo and person.gdpr_consent %}
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
      {% if person.orcid %} <a href="{{ person.orcid }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/orcid.svg' | relative_url }}" alt="ORCID" style="width: 16px; height: 16px; vertical-align: middle;"></a>{% endif %}
      {% if person.gscholar %} <a href="{{ person.gscholar }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/google_scholar.svg' | relative_url }}" alt="Google Scholar" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.github %} <a href="{{ person.github }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/github.svg' | relative_url }}" alt="GitHub" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.cphof %} <a href="{{ person.cphof }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/cphof.png' | relative_url }}" alt="CPHOF" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.uu %} <a href="{{ person.uu }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/utrecht_university.png' | relative_url }}" alt="Utrecht University" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.linkedin %} <a href="{{ person.linkedin }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/linkedin.png' | relative_url }}" alt="LinkedIn" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
      {% if person.website %} <a href="{{ person.website }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; border-bottom: none;"><img src="{{ '/assets/images/logo/personal.svg' | relative_url }}" alt="Personal Website" style="width: 16px; height: 16px; vertical-align: middle;"> </a>{% endif %}
    </div>

    <p style="margin-top: 0.5rem;">{{ person.focus }}</p>
  </div>
</div>
{% endfor %}

## Team
{% for person in site.data.members.team %}
<div class="member-card" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  <div class="member-photo" style="flex-shrink: 0;">
    {% if person.photo and person.gdpr_consent %}
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

<details class="alumni-details">
<summary class="alumni-summary">
  <h2>Alumni</h2>
  <span class="alumni-arrow"></span>
</summary>
<div class="alumni-content" style="margin-top: 1.5rem;">
{% for person in site.data.members.alumni %}
<div class="member-card" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  <div class="member-photo" style="flex-shrink: 0;">
    {% if person.photo and person.gdpr_consent %}
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
</div>
</details>

<details class="alumni-details">
<summary class="alumni-summary">
  <h2>Industry Interns</h2>
  <span class="alumni-arrow"></span>
</summary>
<div class="alumni-content" style="margin-top: 1.5rem;">
{% for person in site.data.members.industry_interns %}
<div class="member-card" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start;">
  <div class="member-photo" style="flex-shrink: 0;">
    {% if person.photo and person.gdpr_consent %}
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
</div>
</details>
