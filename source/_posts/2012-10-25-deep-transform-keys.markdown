---
layout: post
title: "Hash#deep_transform_keys"
date: 2012-10-25 08:49
comments: true
categories:
---

Hash中身のkeyを加工して結果を返したくてActiveSupportのソースコード読んでたらHash#deep_transform_keysっていうのがあって、以下のようなことができるんだけど

{% codeblock lang:ruby %}
  hash = { person: { name: 'Rob', age: '28' } }
  hash.deep_transform_keys{ |key| key.to_s.upcase }
  # => { "PERSON" => { "NAME" => "Rob", "AGE" => "28" } }
{% endcodeblock %}

今開発で使ってるRails 3.2.8だとundefined methodになって調べたら、Rails 4.0の[リリースノート](http://edgeguides.rubyonrails.org/4_0_release_notes.html)に書いてあった。

> Add Hash#transform_keys, Hash#transform_keys!, Hash#deep_transform_keys and Hash#deep_transform_keys!.

Rails4.0から追加されるらしい。
