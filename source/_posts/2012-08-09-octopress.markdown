---
layout: post
title: "Octopressでよく使うコマンド"
date: 2012-08-09 06:23
comments: true
categories:
---

## 新しい記事作成
{% codeblock lang:sh %}
rake new_post\["post"\]
{% endcodeblock %}
postって書いたところに記事の名前を指定する

## 生成してデプロイ
{% codeblock lang:sh %}
rake gen_deploy
{% endcodeblock %}

## 手元で表示確認
{% codeblock lang:sh %}
rake preview
{% endcodeblock %}
4000番のポートで見えるようになる

## 他にどんなコマンドがあるかみる
{% codeblock lang:sh %}
rake --tasks
{% endcodeblock %}
