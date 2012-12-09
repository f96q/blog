---
layout: post
title: "gitでコミットする時にrspecのfocusが付いてたらコミットを無効にする"
date: 2012-12-08 12:19
comments: true
categories:
---

{% codeblock .git/hooks/pre-commit lang:sh %}
#!/bin/sh

find spec -type f ! -name "spec_helper.rb" | xargs grep -e "focus" | while read line; do
 echo "error: commit failed."
 echo $line
 exit 1
done
{% endcodeblock %}

rspecで:forcus => trueを消し忘れるので対策。gitのpre-commitに設定。
