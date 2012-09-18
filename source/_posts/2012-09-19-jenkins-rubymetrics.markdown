---
layout: post
title: "chef-jenkinsでrubyMetricsをインストールする"
date: 2012-09-19 07:48
comments: true
categories:
---

[chef-jenkins](https://github.com/fnichol/chef-jenkins)でレシピを作っていて
SimpleCovを使うのにjenkinsプラグインのrubyMetricsを自動インストールされるようにしたんだけど、
rubyMetricsだけ指定しても起動すると反映されていなくて依存してるプラグインは自動でインストールされないらしい。

依存しているプラグインのmaven-pluginとrakeも入れるようにしたら動くようになった。

{% codeblock lang:ruby %}
default[:jenkins][:server][:plugins] = ["maven-plugin", "rake", "rubyMetrics"]
{% endcodeblock %}





