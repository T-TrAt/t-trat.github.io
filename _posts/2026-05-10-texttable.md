---
layout: post
title: Python 中的 texttable 模块：极简命令行表格输出
tags: Tutorial
math: false
date: 2026-05-10 19:00 +0800
---

课程作业里面有让画表格的任务，不想手绘，于是就找到了一个比较方便的表格库。

Texttable 是 Python 的一款功能和使用都很简单的表格库。该库的功能只有一个——就是打印类似这样的表格：

```text
+--------+-----+-------+
|  Item  | Qty | Price |
+========+=====+=======+
| Apple  | 5   | 3.500 |
+--------+-----+-------+
| Banana | 3   | 2     |
+--------+-----+-------+
| Orange | 2   | 4.500 |
+--------+-----+-------+
```

表格结构如下：

<img src="/imgs/2026-05-10-texttable/table-sample.webp" alt="texttable 表格示例" style="display: block; margin: 0 auto; width: 75%; border-radius: 0px; box-shadow: 0 4px 8px rgba(0,0,0,0.1)">

用一个例子来介绍如何使用 texttable.

```python
import texttable                          # 引入 texttable 库

table = texttable.Texttable()             # 实例化一个 texttable 对象
table.add_rows([["Item", "Qty", "Price"], # 使用 add_rows 函数写入表格
               ["Apple", 5, 3.5],
               ["Banana", 3, 2.0],
               ["Orange", 2, 4.5]])

print(table.draw())                       # 打印表格
```

输出结果：

```text
+--------+-----+-------+
|  Item  | Qty | Price |
+========+=====+=======+
| Apple  | 5   | 3.500 |
+--------+-----+-------+
| Banana | 3   | 2     |
+--------+-----+-------+
| Orange | 2   | 4.500 |
+--------+-----+-------+
```

在 texttable 里，表格使用二维数组表示，以行的方式添加元素。添加行使用以下函数：

```Python

```

参考

<a href="https://yaoweibin.cn/python%e4%b8%ad%e7%9a%84texttable%e6%a8%a1%e5%9d%97%e6%89%93%e9%80%a0%e4%bc%98%e9%9b%85%e7%9a%84%e5%91%bd%e4%bb%a4%e8%a1%8c%e8%a1%a8%e6%a0%bc%e8%be%93%e5%87%ba/">Python 中的 texttable 模块：打造优雅的命令行表格输出　作者　姚伟斌</a>