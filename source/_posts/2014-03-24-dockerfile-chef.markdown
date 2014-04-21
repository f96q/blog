---
layout: post
title: "Chefのレシピ書く用にDockerfile作った"
date: 2014-03-24 00:47
comments: true
categories:
---

{% codeblock lang:sh %}
FROM centos
MAINTAINER danny

# ssh
RUN yum -y install openssh-server
RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config
RUN sed -ri 's/#UsePAM no/UsePAM no/g' /etc/ssh/sshd_config
RUN /etc/init.d/sshd start

# epel
RUN rpm --import http://dl.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-6
RUN yum install -y http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm

# supervisor
RUN yum install -y supervisor
RUN echo "[supervisord]" > /etc/supervisord.conf
RUN echo "nodaemon=true" >> /etc/supervisord.conf
RUN echo "[program:sshd]" >> /etc/supervisord.conf
RUN echo "command=/usr/sbin/sshd -D" >> /etc/supervisord.conf

# root
RUN mkdir /root/.ssh
RUN wget -O /root/.ssh/authorized_keys https://github.com/f96q.keys
RUN chmod 700 /root/.ssh
RUN chmod 600 /root/.ssh/authorized_keys

# chef
RUN rpm -ihv https://opscode-omnibus-packages.s3.amazonaws.com/el/6/x86_64/chef-11.10.4-1.el6.x86_64.rpm

RUN yum install -y rsync

CMD /usr/bin/supervisord
{% endcodeblock %}
