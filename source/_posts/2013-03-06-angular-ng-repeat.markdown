---
layout: post
title: "angular.jsでng-repeatした時にインデックスを取得"
date: 2013-03-06 00:59
comments: true
categories:
---

{% codeblock lang:html %}
<ul>
  <li data-ng-repeat="item in items">{{$index}}</li>
</ul>
{% endcodeblock %}

$indexで取得できた。
