---
layout: post
title: ImageMagick
tags: ImageMagick tutorial
math: false
date: 2026-04-18 19:00 +0800
---

很适合在博客上使用的工具。

可以进行图片的**格式转换**、**缩放**、**裁切**、**旋转**、**基础滤镜**、**基础调色**等操作。

# ImageMagick

是一款开源的轻量级的图像格式转换命令行工具。该工具除了基础的图像格式转换，还可以做简单的压缩等操作。

在博客等网页的搭建中，通常要缩放图片以提高访问性能。

GitHub 仓库：https://github.com/imagemagick/imagemagick

官网：https://github.com/imagemagick/imagemagick



## 下载方式

**Windows** 用户

```bash
# 1. 访问官网下载
https://imagemagick.org/download/#windows&gsc.tab=0
# 2. 通过 powershell 下载
winget install ImageMagick.ImageMagick
```

**macOS** 用户

```bash
brew install imagemagick
```

**Linux** 用户

```bash
sudo apt update
sudo apt install imagemagick
```



## 使用方法

先看看常用图像格式的特性：

| 格式 | 是否有损压缩【lossy】 | 色彩数 【number colors】 | 是否支持动画【animation】 |
| ---- | --------------------- | ------------------------ | ------------------------- |
| PNG  | 无损                  | 真彩色                   | 不支持                    |
| JPEG | 有损                  | 真彩色                   | 不支持                    |
| WebP | 即支持有损也支持无损  | 真彩色                   | 支持                      |
| GIF  | 有损                  | 256 色（8 位索引色）     | 支持                      |

现代网站中常用 WebP 作为统一的图片格式。

因此在搭建网站的时候我们通常要进行图像**格式转换**。接下来是操作方法：

```bash
magick xx.png xx.webp  # 将 PNG 文件 xx 转换为 WebP 格式
```

同理，我们也可以转换到其他格式：

```bash
magick xx.png xx.jpg   # 将 PNG 文件 xx 转换为 JPG 格式
```

---

批量处理

```bash
# 将某一文件夹下的所有 .png 转换为 .jpg 格式
for ff in *.png; do magick $ff $ff.jpg; done

# convert all png in a dir to jpg
# file name should not contain ttt. if so, change ttt to hhh or something random
find . -name "*png" -print0 | xargs -0 -L1 -I ttt magick ttt ttt.jpg
```

---

除了格式转换，ImageMagick 的其余操作全部由**参数**控制。总共有以下参数：

- quality
- scale
- trim
- crop
- modulate
- flatten
- type
- colors
- depthsharpen
- blur
- fill draw
- bordercolor border
- rotate
- flip flop
- +/-append



**`-quality` 参数**

转换指令中，参数 `-quality` 用于指定转换过程中保留图像细节的程度。-`quality` 的数值为 0-100%，缺省时默认为 92%.

`-quality` 的计算方法没有固定的标准，是一个参考数值，具体需要看这个工具是怎么实现的。*

```bash
magick xx.png -quality 90% xx.jpg  # 将 PNG 文件 xx 转换为 JPG 格式，转换质量为 90%
```







本文参考以下文章所撰写：
http://xahlee.info/img/imagemagic.html【ImageMagick Tutorial】
