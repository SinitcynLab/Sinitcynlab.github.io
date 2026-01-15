---
layout: page
title: News
permalink: /news/
---
![Sinitcyn Lab News Photo]({{ '/assets/images/photo/news.jpg' | relative_url }}){: style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 2rem;" }

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url | relative_url }})
<small>{{ post.date | date: "%B %d, %Y" }} • {{ post.author }}</small>

{{ post.excerpt }}

{% unless forloop.last %}<hr style="margin: 2rem 0; border: 0; border-top: 1px solid #e2e8f0;">{% endunless %}
{% endfor %}
