---
layout: post
title: "git-new-workdirが便利だった"
date: 2013-03-04 00:50
comments: true
categories:
---

git-new-workdirを使ってみたらすごく便利だった、ワーキングディレクトリを複数作れる。

# 使い方

{% codeblock lang:sh %}
git-new-workdir <repository> <new_workdir> [<branch>]
{% endcodeblock %}

例えばblogって名前のシステムを複数人で機能ごとにブランチ切ってやっててレビューしながら開発してる時に

{% codeblock lang:sh %}
git-new-workdir blog blog-review
{% endcodeblock %}

とかやれば、blog-reviewってディレクトリがblogとは別なワーキングディレクトリになる。

自分が開発しているときに途中で別ブランチのレビューをする場合に今まで

1. 自分の開発用ブランチでstatsh
2. レビュー用のブランチに切り替え
3. レビュー終わり
4. 自分の開発用ブランチに戻る
5. statsh pop

とかしてたのをblogとblog-reviewというディレクトリの切り替えで済むようになった。

他にもデザイン用のブランチがorphanブランチでデザイン当てにhtmlを見ないといけない時とかに、
デザイン用ブランチをワーキングディレクトリとして別に作っておけばいちいちブランチを切り替えなくても作業出来るのでいいと思う。

# 参考

[git-new-workdir が便利](http://subtech.g.hatena.ne.jp/secondlife/20121207/1354854068)
