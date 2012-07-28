---
layout: post
title: "WebSocketの接続が切れた時に自動で再接続"
date: 2012-07-29 06:04
comments: true
categories:
---
[Socket.IO](http://socket.io/)が使えるのであればSocket.IOを使ったほうがいいと思うんだけど。

{% codeblock lang:coffeescript %}
class WebSocketClient
  @timer_id: null

  constructor: (@url) ->
    socket = new WebSocket(@url)
    socket.onopen = =>
      clearInterval WebSocketClient.timer_id
      WebSocketClient.timer_id = null

    socket.onmessage = (e) ->
      console.log e

    socket.onerror = (e) ->
      console.log e

    reconnect = =>
      new WebSocketClient(@url) if WebSocketClient.timer_id?

    socket.onclose = =>
      WebSocketClient.timer_id = setInterval(reconnect, 5000) unless WebSocketClient.timer_id?
{% endcodeblock %}

実行例
{% codeblock lang:coffeescript %}
  new WebSocketClient('ws://localhost:3001')
{% endcodeblock %}
