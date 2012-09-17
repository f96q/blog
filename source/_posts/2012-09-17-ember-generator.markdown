---
layout: post
title: "ember-railsでジェネレーターを使って生成する"
date: 2012-09-17 21:02
comments: true
categories:
---

ember-railsで新しいviewとかmodelとかcontrollerを追加する時に手作業でいちいちファイル作るのが不便なので、railsみたいジェネレーターで生成できるかを調べてみた。

## model
{% codeblock lang:sh %}
$ bundle exec rails g ember:model test_controller
    create  app/assets/javascripts/models/test.js
{% endcodeblock %}

## view
{% codeblock lang:sh %}
$ bundle exec rails g ember:view test
    create  app/assets/javascripts/views/test_view.js
    create  app/assets/javascripts/templates/test.handlebars
    create  app/assets/javascripts/controllers/test_controller.js
{% endcodeblock %}

viewの時だけcontrollerもいっしょに生成された。

## controller
{% codeblock lang:sh %}
$ bundle exec rails g ember:controller test
    create  app/assets/javascripts/controllers/test_controller.js
{% endcodeblock %}

### Ember.ArrayControllerベースのcontrollerを生成する場合
{% codeblock lang:sh %}
$ bundle exec rails g ember:controller test --array
    create  app/assets/javascripts/controllers/test_controller.js
{% endcodeblock %}
