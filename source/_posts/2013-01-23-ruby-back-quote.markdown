---
layout: post
title: "rubyのバッククオートについて"
date: 2013-01-23 14:35
comments: true
categories:
---

{% codeblock lang:ruby %}
`ls`
{% endcodeblock %}

とかで外部のコマンドを実行できるのが、どうなってるか調べてみた。

#実装
{% codeblock io.c %}
static VALUE
rb_f_backquote(VALUE obj, VALUE str)
{
    volatile VALUE port;
    VALUE result;
    rb_io_t *fptr;

    SafeStringValue(str);
    rb_last_status_clear();
    port = pipe_open_s(str, "r", FMODE_READABLE|DEFAULT_TEXTMODE, NULL);
    if (NIL_P(port)) return rb_str_new(0,0);

    GetOpenFile(port, fptr);
    result = read_all(fptr, remain_size(fptr), Qnil);
    rb_io_close(port);

    return result;
}
{% endcodeblock %}

{% codeblock io.c %}
  rb_define_global_function("`", rb_f_backquote, 1);
{% endcodeblock %}

#呼び出し方
{% codeblock lang:ruby %}
Kernel.`('ls')
{% endcodeblock %}

これで呼べた。
