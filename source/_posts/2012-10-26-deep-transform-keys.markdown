---
layout: post
title: "deep_transform_keys!"
date: 2012-10-26 08:33
comments: true
categories:
---

Hash#deep_transform_keys!だとHashのkeyの値がArrayでそのArrayにHashが入ってる場合のケースにHashのkeyが変換できなかったので結局自分で実装した。

再帰は面白いですね。

# 実装

{% codeblock lang:ruby %}
def deep_transform_keys!(value, &block)
  case value
  when Hash
    value.keys.each {|key| value[yield(key)] = deep_transform_keys!(value.delete(key), &block) }
    value
  when Array
    value.map {|v| deep_transform_keys!(v, &block) }
  else
    value
  end
end
{% endcodeblock %}

# 実行例

{% codeblock lang:ruby %}
value = {person: { first_name: 'Rob', last_name: 'Bob'}}
deep_transform_keys!(value) {|key| key.to_s.camelize(:lower).to_sym}
# => {person: { firstName: 'Rob', lastName: 'Bob'}}
{% endcodeblock %}

{% codeblock lang:ruby %}
value = {person: { firstName: 'Rob', lastName: 'Bob'}}
deep_transform_keys!(value) {|key| key.to_s.underscore.to_sym}
# => {person: { first_name: 'Rob', last_name: 'Bob'}}
{% endcodeblock %}
