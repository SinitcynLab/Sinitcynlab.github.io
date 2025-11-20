---
layout: page
title: News
permalink: /news/
---

Stay up to date with announcements from the Sinitcyn Lab.

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url | relative_url }})
<small>{{ post.date | date: "%B %d, %Y" }} • {{ post.author }}</small>

{{ post.excerpt }}
{% endfor %}
