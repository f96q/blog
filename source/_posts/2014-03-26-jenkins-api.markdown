---
layout: post
title: "JenkinsのAPIでジョブを実行する方法"
date: 2014-03-26 00:02
comments: true
categories:
---

リモートからジョブを実行するのに便利だった。

JenkinsにBasic認識が付いてて、testとい名前のジョブを実行する場合。

## パラメータなしで実行

{% codeblock lang:sh %}
curl -X POST --user name:password http://host/job/test/build
{% endcodeblock %}

## パラメータ付きで実行

{% codeblock lang:sh %}
curl -X POST --user name:password "http://host/job/test/buildWithParameters?param1=value1"
{% endcodeblock %}
