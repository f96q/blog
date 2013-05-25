---
layout: post
title: "Objective-Cでシングルトン"
date: 2013-01-03 18:18
comments: true
categories:
---

前までは[シングルトンインスタンスの作成](https://developer.apple.com/jp/documentation/Cocoa/Conceptual/CocoaFundamentals/CocoaObjects/chapter_3_section_10.html)のドキュメントに書いてある通り書けばできたけど
最近のXcode 4.5.2でビルドすると- (void)releaseを空定義するとwarningが出るようになってしまって、最近はdispatch_onceでやる方法があった。

{% codeblock lang:objc %}
#define DEFINE_SINGLETON(_type_)                  \
  + (_type_ *)sharedInstance {                    \
    static _type_ *_sharedInstance = nil;         \
    static dispatch_once_t predicate;             \
    dispatch_once(&predicate, ^ {                 \
      _sharedInstance = [[self alloc] init];      \
    });                                           \
    return _sharedInstance;                       \
  }                                               \
  + (_type_*)allocWithZone:(NSZone *)zone {       \
    static _type_ *sharedInstance = nil;          \
    static dispatch_once_t predicate;             \
    dispatch_once(&predicate, ^{                  \
      sharedInstance = [super allocWithZone:zone];\
    });                                           \
    return sharedInstance;                        \
  }                                               \
{% endcodeblock %}
