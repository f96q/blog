---
layout: post
title: "RailsでEmber.jsを使えるようにするまで"
date: 2012-09-10 08:33
comments: true
categories:
---
##railsのプロジェクト作成

{% codeblock %}
rails new demo
{% endcodeblock %}

##gemの追加
Uncaught Error: assertion failed: Ember Views require jQuery 1.7

というエラーが動かした時に出たのでjquery-railsのバージョンを固定。

{% codeblock Gemfile lang:ruby %}
  gem 'jquery-rails', '2.0.3'
  gem 'ember-rails'
{% endcodeblock %}

{% codeblock %}
bundle install --path .bundle
{% endcodeblock %}

## emberで使う階層構造とファイルなどの自動生成
{% codeblock %}
bundle exec rails g ember:bootstrap
{% endcodeblock %}

##設定を追加
{% codeblock config/environments/development.rb %}
Demo::Application.configure do
  config.ember.variant = :development
end
{% endcodeblock %}

{% codeblock %}
rails g controller home
{% endcodeblock %}

{% codeblock config/routes.rb %}
Demo::Application.routes.draw do
  root :to => 'home#index'
end
{% endcodeblock %}

動かしてChromeのJavaScriptコンソールでエラーが出てないのを確認。
