---
layout: post
title: "capistranoでchef-soloを実行する"
date: 2013-05-01 08:26
comments: true
categories:
---

chefのレシピ作るのを試しやすくするのに作った。

自分のローカルで作ったクックブックをcapistranoでappに指定したサーバーにコピーしてchef-solo実行する。

{% codeblock config/deploy.rb %}
set :application, 'chef-solo'
set :user, 'root'
role :app, '192.168.33.10'

namespace :chef do
  task :install do
    run "if [[ -d /tmp/chef ]]; then rm -r /tmp/chef; fi"
    upload 'cookbook', '/tmp/chef'
    upload 'chef.rb', '/tmp/chef/chef.rb'
    upload 'chef.json', '/tmp/chef/chef.json'
    run 'chef-solo -c /tmp/chef/chef.rb -j /tmp/chef/chef.json'
    run 'rm -r /tmp/chef'
  end
end
{% endcodeblock %}

{% codeblock chef.json %}
{
  "run_list": [ "recipe[package]" ]
}
{% endcodeblock %}

{% codeblock chef.rb %}
file_cache_path '/tmp/chef-solo'
cookbook_path '/tmp/chef'
{% endcodeblock %}
