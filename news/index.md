---
layout: page
title: News
permalink: /news/
---
![Sinitcyn Lab News Photo]({{ '/assets/images/photo/news.jpg' | relative_url }})
{: style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 2rem;" }

<style>
  .news-list-item {
    display: flex;
    gap: 1.5rem;
    align-items: start;
    margin-bottom: 2rem;
  }
  .news-list-image {
    flex: 0 0 150px;
    width: 150px;
    height: 150px; /* Fixed square height */
  }
  .news-list-image img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover; /* Ensures image covers the square area */
    display: block;
  }
  .news-list-content {
    flex: 1;
  }
  .news-list-content h3 {
    margin-top: 0;
  }
  @media (max-width: 600px) {
    .news-list-item {
      flex-direction: column;
    }
    .news-list-image {
      flex: 0 0 auto;
      max-width: 100%;
      width: 100%;
      height: 200px; /* Larger banner style on mobile */
      margin-bottom: 1rem;
    }
  }
</style>

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
