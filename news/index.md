---
layout: page
title: News
permalink: /news/
---
![Sinitcyn Lab News Photo]({{ '/assets/images/photo/news.jpg' | relative_url }})
{: style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 2rem;" }

{% for post in site.posts %}
<article class="news-list-item">
  {% if post.thumbnail %}
  <div class="news-list-image">
    <a href="{{ post.url | relative_url }}">
      <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
    </a>
  </div>
  {% endif %}
  <div class="news-list-content">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <small>{{ post.date | date: "%B %d, %Y" }} • {{ post.author }}</small>
    <p>{{ post.excerpt }}</p>
  </div>
</article>

{% unless forloop.last %}<hr style="margin: 2rem 0; border: 0; border-top: 1px solid #e2e8f0;">{% endunless %}
{% endfor %}
