---
layout: post
title: "トークンの生成の仕方"
date: 2012-11-02 07:05
comments: true
categories:
---

# devise-2.1.2

{% codeblock /lib/devise.rb %}
# Generate a friendly string randomically to be used as token.
def self.friendly_token
  SecureRandom.base64(15).tr('+/=lIO0', 'pqrsxyz')
end
{% endcodeblock %}

# sorcery-0.7.7

{% codeblock /lib/sorcery/model/temporary_token.rb %}
# Random code, used for salt and temporary tokens.
def self.generate_random_token
  SecureRandom.base64(15).tr('+/=lIO0', 'pqrsxyz')
end
{% endcodeblock %}

ソースコード読んでたら、deviseとsorceryで実装が同じだった。
