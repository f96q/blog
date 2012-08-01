---
layout: post
title: "CarrierWave"
date: 2012-08-02 05:54
comments: true
categories:
---

## 日本語のファイル名が____に置き換わってしまうのを防ぐ

{% codeblock /config/initializers/carrierwave.rb %}
CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
{% endcodeblock %}

## ファイルサイズのバリデーター

+ [How to: Validate attachment file size](https://github.com/jnicklas/carrierwave/wiki/How-to%3A-Validate-attachment-file-size)

本体のソースコード追ってなかったので、探したらここに書いてあった。
