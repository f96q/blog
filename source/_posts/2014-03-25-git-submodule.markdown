---
layout: post
title: "gitのsubmoduleについて"
date: 2014-03-25 00:40
comments: true
categories:
---

gitのsubmoduleを最近使い始めた。最低限これで使えてる。

## submoduleに追加する

{% codeblock lang:sh %}
git submodule add [repository name]
{% endcodeblock %}

.gitmodulesとリポジトリ名のファイルができるのでメインのリポジトリにコミットしておく。

## submoduleのリポジトリを更新

{% codeblock lang:sh %}
git submodule foreach 'git pull origin master'
{% endcodeblock %}

## 空の初期状態で取り込む

{% codeblock lang:sh %}
git submodule update --init
{% endcodeblock %}
