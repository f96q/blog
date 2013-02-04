---
layout: post
title: "Gitのorphanブランチについて"
date: 2013-02-05 00:33
comments: true
categories:
---

試しにtestという名前のブランチで作成してみた。

# masterブランチで
{% codeblock lang:sh %}
cp  .gitignore dot.gitignore
{% endcodeblock %}

.gitignoreをコピーするのに別名でコピーした。

# testブランチで
{% codeblock lang:sh %}
git checkout --orphan test
git rm -rf .
mv dot.gitignore .gitignore
git add .gitignore
git commit -m 'test'
git push origin test
{% endcodeblock %}

# 結果
![](/images/uploads/git-orphan-branch.jpg")

根っこがつながってない。
