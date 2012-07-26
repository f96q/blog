---
layout: post
title: "ActiveModelのattributeの翻訳"
date: 2012-07-27 05:59
comments: true
categories:
---

以下のようなActiveRecordを使わないモデルを作った時に
{% codeblock lang:ruby %}
class Test
  include ActiveModel::Conversion
  extend ActiveModel::Naming
  include ActiveModel::Validations

  attr_accessor :example

  def persisted?
    false
  end
end
{% endcodeblock %}

attributeを翻訳すると
{% codeblock lang:ruby %}
Test.human_attribute_name(:example)
{% endcodeblock %}

翻訳ファイルの見に行く先が
{% codeblock lang:ruby %}
I18n.t('activerecord.attributes.test.example')
{% endcodeblock %}
ではなくて以下になる

{% codeblock lang:ruby %}
I18n.t('activemodel.attributes.test.example')
{% endcodeblock %}
