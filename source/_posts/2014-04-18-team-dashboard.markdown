---
layout: post
title: "Team Dashboardでグラフを出す方法"
date: 2014-04-18 00:06
comments: true
categories:
---

Railsでグラフにする値を返すjsonを作る。

# コントローラー

{% codeblock lang:ruby %}
class GraphController < ApplicationController
  def test
    result = [{
      target: 'test',
      datapoints: [[1, 1], [2, 2], [3, 3]]
    }]
    render json: result
  end
end
{% endcodeblock %}

# ルーティング

{% codeblock lang:ruby %}
get 'test' => 'graph#test'
{% endcodeblock %}

# 設定

Team DashboardでAdd Widgetでgraphを選択して、http_proxyにjsonを返すurlを指定する。

![](/images/uploads/graph.jpg)
