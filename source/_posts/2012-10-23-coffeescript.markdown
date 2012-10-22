---
layout: post
title: "Coffee Scriptのコールバック関数の話"
date: 2012-10-23 08:03
comments: true
categories:
---

{% codeblock lang:coffeescript %}
func = (flag = false) ->
  if flag
    alert 'true'
  else
    alert 'false'
{% endcodeblock %}

上のような関数を定義した時

{% codeblock lang:coffeescript %}
$('body').click func
{% endcodeblock %}
ってやると引数がflag = falseでfalseが入ってalert 'false'が実行されるようにみえるんだけど
clickのcallbackする関数の第一引数がJQuery.Eventなので結果としてfuncの第一引数にJQuery.Eventのオブジェクトが渡されてalert 'true'の方が実行されてしまう。

{% codeblock lang:coffeescript %}
$('body').click -> func()
{% endcodeblock %}
なのでこの書き方が安全だと思う。
