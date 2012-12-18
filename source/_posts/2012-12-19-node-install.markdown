---
layout: post
title: "debianでnode.jsをインストールする方法"
date: 2012-12-19 00:55
comments: true
categories:
---

#インストール

{% codeblock lang:sh %}
$ apt-get install nodejs npm
{% endcodeblock %}

本体もnpmもaptで入るので良い。

#シンボリックリンクを貼る
{% codeblock lang:sh %}
$ cd /usr/bin
$ ln -s nodejs node
{% endcodeblock %}

コマンドでnodeで認識されるようにするためにシンボリックリンクを貼った。
