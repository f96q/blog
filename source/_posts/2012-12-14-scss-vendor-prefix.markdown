---
layout: post
title: "SCSSのベンダープレフィックスについて"
date: 2012-12-14 19:24
comments: true
categories:
---

##普通に書く
{% codeblock lang:scss %}
  -webkit-transiton: background-color 1s linear;
  -moz-transiton:    background-color 1s linear;
  -ms-transiton:     background-color 1s linear;
  -o-transiton:      background-color 1s linear;
  transiton:         background-color 1s linear;
{% endcodeblock %}

普通に書くと同じ事を何回も書かないといけなくて面倒。

## @mixinを使う
{% codeblock lang:scss %}
@mixin transiton($property...) {
  -webkit-transiton: $property;
  -moz-transiton:    $property;
  -ms-transiton:     $property;
  -o-transiton:      $property;
  transiton:         $property;
}

@include transiton(background-color 1s linear);
{% endcodeblock %}

@mixinを使うとDRYに、@include transitonで再利用できるようになる。

## さらに@eachを使う
{% codeblock lang:scss %}
$prefixes: -webkit-, -moz-, -ms-, -o-, '';

@mixin transiton($property...) {
  @each $prefix in $prefixes {
    #{$prefix}transiton: $property;
  }
}

@include transiton(background-color 1s linear);
{% endcodeblock %}

さらに@eachを使ってループでベンダープレフィックスを回してコードを短くする。

##終わりに
css周りとかあんまり興味がなかったんだけど、知らないうちにプログラマブルに書けるようになっていて面白いですね。
