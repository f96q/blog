---
layout: post
title: "Mongo DBでrailsのscript console使ってる時にtranslation missing: ja.mongoid.inspection.criteriaになる"
date: 2012-11-14 01:33
comments: true
categories:
---

対応する翻訳を入れたほうがいいんだろうけど、とりあえずscript consoleで以下を先に実行して回避。

{% codeblock lang:sh %}
>> I18n.locale = :en
{% endcodeblock %}
