---
layout: post
title: "iOS SDKでapp idを取得する方法"
date: 2013-05-08 06:49
comments: true
categories:
---

{% codeblock lang:objc %}
NSString *appId = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIdentifier"];
{% endcodeblock %}
