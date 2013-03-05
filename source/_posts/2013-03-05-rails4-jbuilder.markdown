---
layout: post
title: "rails4のjbuilderを使ってみた"
date: 2013-03-05 23:44
comments: true
categories:
---

rails4の新機能のjbuilderを使ってみました。

# なにがいいの

今までだとjsonを返すのにas_jsonをオーバーライドしたりしてto_jsonで返したりとかすることがあって、
特定のルーティングの時はjsonのこの項目だけ返さないようにしたいとか返す値を変えたいとかがやりずらくて、
その辺のをviewの別ファイルとして分けれるのがいいんじゃないかと思いました。

# routes

{% codeblock config/routes.rb %}
resouce :items, :only => [:index]
{% endcodeblock %}

# controller

{% codeblock app/controllers/items_controller.rb %}
def index
  @items = Item.all
end
{% endcodeblock %}

# view

{% codeblock lang:ruby /app/views/items/index.json.jbuilder %}
json.key_format! :camelize => :lower

json.array!(@items) do |item|
  json.price item.price
  json.name  item.name
  json.size  item.size
end
{% endcodeblock %}

# 最後に

jbuilderいいんだけど、名前で検索するとjavaのIDEばっかり出てくるから名前がよくないんじゃないかと思ったりもしなくないな。
