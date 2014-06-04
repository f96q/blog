---
layout: post
title: "dockerでポートフォワードを複数指定する方法"
date: 2014-06-04 16:08
comments: true
categories:
---

{% codeblock lang:sh %}
docker run -t -i -d -p 2222:22 -p 3003:3000 ruby-mysql /usr/bin/supervisord
{% endcodeblock %}
