---
layout: post
title: "iOS用の必要なアイコンを作るスクリプト"
date: 2013-02-16 23:07
comments: true
categories:
---

# スクリプト

{% codeblock icon.sh %}
#!/bin/sh

convert -resize 57x57 $1 Icon.png
convert -resize 114x114 $1 Icon@2x.png

convert -resize 72x72 $1 Icon-72.png
convert -resize 144x144 $1 Icon-72@2x.png

convert -resize 29x29 $1 Icon-Small.png
convert -resize 58x58 $1 Icon-Small@2x.png

convert -resize 50x50 $1 Icon-Small-50.png
convert -resize 100x100 $1 Icon-Small-50@2x.png

convert -resize 512x512 $1 -format png iTunesArtwork
convert -resize 1024x1024 $1 -format png iTunesArtwork@2x
{% endcodeblock %}

# 実行例

{% codeblock lang:sh %}
sh icon.sh ../data/icon.png
{% endcodeblock %}
