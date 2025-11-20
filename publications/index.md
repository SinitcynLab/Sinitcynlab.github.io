---
layout: page
title: Publications
permalink: /publications/
---

We develop open, reproducible methods for computational mass spectrometry. Selected publications are highlighted here.

{% for paper in site.data.publications %}
### {{ paper.title }}
**Authors:** {{ paper.authors }}  
**Venue:** {{ paper.venue }}  
[Read the paper]({{ paper.link }})
{% if paper.highlight %}
> Highlighted work: integrates AI-driven pipelines with DIA mass spectrometry.
{% endif %}
{% endfor %}
