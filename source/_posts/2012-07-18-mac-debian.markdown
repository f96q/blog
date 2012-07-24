---
layout: post
title: "Mac mini (mid 2011)にDebianをインストールした"
date: 2012-07-18 06:37
comments: true
categories:
---

MacだとEFIを使ってる関係で、インストールはできても起動はしない。
調べるとMac OS Xとディアルブートする方法は結構あったんだけど、
Mac OS Xを消してDebianだけを入れたくて調べてたら、
[MacBookProにDebianを入れる](http://blog.htlab.net/2012/07/04/macbookpro-debian)のやり方でできた。

1. 外付けハードディスクにMac OS Xをインストール
2. 外付けハードディスクからMac OS Xを起動して内蔵の方は中身を削除
3. 内蔵のハードディスクにパーティションを切って[rEFIt](http://refit.sourceforge.net/)をインストール
4. Debianを普通にインストールする
5. rEFItのStart partitioning ToolでMBRをアップデートする

今のところ多分これがあんまりいじらなくてもインストールできる方法なんじゃないかなと思います。
