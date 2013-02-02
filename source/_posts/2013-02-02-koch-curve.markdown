---
layout: post
title: "コッホ曲線を書くのをrubyに移植した"
date: 2013-02-02 22:29
comments: true
categories:
---

[前](http://kray.jp/blog/html5-canvas)にjavascriptとcanvasを使ってたのをrubyに移植しました。

#実装
{% codeblock lang:ruby %}
require "rmagick"

def draw_line(image, p1, p2)
  d = Magick::Draw.new
  d.line p1[:x], p1[:y], p2[:x], p2[:y]
  d.draw image
end

def draw(image, p1, p2, n)
  p3 = {
    :x => (2 * p1[:x] + p2[:x]) / 3,
    :y => (2 * p1[:y] + p2[:y]) / 3
  }
  p4 = {
    :x => (p1[:x] + 2 * p2[:x]) / 3,
    :y => (p1[:y] + 2 * p2[:y]) / 3
  }
  x = p2[:x] - p1[:x]
  y = - (p2[:y] - p1[:y])
  dis = Math.sqrt(x * x + y * y) / Math.sqrt(3)
  if x >= 0
    p = p1
    rad = Math::PI / 6.0
  else
    p = p2
    rad = - Math::PI / 6.0
  end
  angle = Math.atan(y.to_f / x) + rad
  p5 = {
    :x => p[:x] + dis * Math.cos(angle),
    :y => p[:y] - dis * Math.sin(angle)
  }
  if n == 0
    draw_line image, p1, p3
    draw_line image, p3, p5
    draw_line image, p5, p4
    draw_line image, p4, p2
  else
    n -= 1
    draw image, p1, p3, n
    draw image, p3, p5, n
    draw image, p5, p4, n
    draw image, p4, p2, n
  end
end

def draw_main(image, n)
  p1 = {x: 100, y: 160}
  p2 = {x: 400, y: 160}
  p3 = {x: 250, y: 420}
  draw image, p1, p2, n
  draw image, p2, p3, n
  draw image, p3, p1, n
end

def main
  image = Magick::Image.new(500, 500)
  draw_main(image, 3)
  image.write 'output.jpg'
end

main
{% endcodeblock %}

#参考
[再帰プログラムによるフラクタル図形の描画](http://codezine.jp/article/detail/73)
