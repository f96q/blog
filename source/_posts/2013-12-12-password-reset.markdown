---
layout: post
title: "Railsの認証ライブラリのパスワードのリセット方法"
date: 2013-12-12 10:22
comments: true
categories:
---

# パスワードのリセット方法

前に作ったのを後で保守しようとした時にパスワードを覚えてないということがあって。

パスワードが8文字以上制限とかついてると新しいパスワードを8文字以上にしないと更新できないので注意。

# sorcery

{% codeblock lang:ruby %}
User.find(1).change_password!('new_password')
{% endcodeblock %}

# devise

{% codeblock lang:ruby %}
User.find(1).reset_password!('new_password', 'new_password_confirmation')
{% endcodeblock %}
