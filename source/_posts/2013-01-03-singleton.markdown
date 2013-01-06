---
layout: post
title: "Objective-Cでシングルトン"
date: 2013-01-03 18:18
comments: true
categories:
---

前までは[シングルトンインスタンスの作成](https://developer.apple.com/jp/documentation/Cocoa/Conceptual/CocoaFundamentals/CocoaObjects/chapter_3_section_10.html)のドキュメントに書いてある通り書けばできたけど
最近のXcode 4.5.2でビルドすると- (void)releaseを空定義するとwarningが出るようになってしまって、最近はdispatch_onceでやる方法があった。

#シングルトン

{% codeblock lang:objc Singleton.h %}
#import <Foundation/Foundation.h>

@interface Singleton : NSObject {

}

+ (Singleton *)sharedManager;
@end
{% endcodeblock %}

{% codeblock lang:objc Singleton.m %}
#import "Singleton.h"

@implementation Singleton
+ (Singleton *)sharedManager {
  static Singleton *_sharedManager = nil;
  static dispatch_once_t predicate;
  dispatch_once(&predicate, ^ {
    _sharedManager  = [[self alloc] init];
  });
  return _sharedManager;
}
@end
{% endcodeblock %}

#使用例
{% codeblock lang:objc %}
#import <Foundation/Foundation.h>
#import "Singleton.h"

@interface Sample : Singleton {

}

+ (Sample *)sharedManager;
@end

@implementation Singleton
+ (Sample *)sharedManager {
  return (Sample *)[super sharedManager];
}
@end
{% endcodeblock %}

#呼び出し方
{% codeblock lang:objc %}
[Sample sharedManager];
{% endcodeblock %}

継承して使えばいちいちシングルトンを実装しなくて済む。
