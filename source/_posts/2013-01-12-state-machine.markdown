---
layout: post
title: "state_machineで条件が通らない場合次のステートに移らないでエラーメッセージを出す方法"
date: 2013-01-12 22:12
comments: true
categories:
---

state_machineについて言及してる人あんまりいないので書いておきます。

{% codeblock lang:ruby %}
class Test < ActiveRecord::Base
  state_machine :state, :initial => :a do
    event :run do
      transition :selecting => :a
    end
    before_transition :a => :b, :do => :check
  end

  def check
    if true
      errors.add :state, 'error message'
    end
  end
end
{% endcodeblock %}

{% codeblock lang:ruby %}
test = Test.create
test.run
{% endcodeblock %}

checkのところでその条件でerrors.addすると次のステートaからステートbに変わらないのとエラーが追加される。
