---
layout: post
title: ImageMagick 教程
tags: ImageMagick Tutorial
math: false
date: 2026-04-18 19:00 +0800
toc: true
description: ImageMagick 是一款开源的轻量级的图像格式转换命令行工具，替代了很多简单的 GUI 图片操作，易用性极高。
---

<div style="display: flex; flex-wrap: wrap; gap: 40px; margin-bottom: 20px; align-items: flex-start;">

  <div style="flex: 1 1 300px;">
    <img src="/imgs/imagemagick.webp" alt="ImageMagick图标" style="width: 100%; border-radius: 0px; box-shadow: 0 4px 8px rgba(0,0,0,0.1)">
  </div>

  <div style="flex: 2 1 300px;">
    <p>
    ImageMagick 是一款开源的轻量级的图像格式转换命令行工具，替代了很多简单的 GUI 图片操作，易用性极高。<br>
    </p>
  </div>
</div>

## 下载方式

通过命令行下载：

Windows 用户

```bash
# 1. 访问官网下载
https://imagemagick.org/download/#windows&gsc.tab=0
# 2. 通过 powershell 下载
winget install ImageMagick.ImageMagick
```

macOS 用户

```bash
brew install imagemagick
```

Linux 用户

```bash
sudo apt update
sudo apt install imagemagick
```

或者直接通过官网下载：

GitHub 仓库：<a href="https://github.com/imagemagick/imagemagick">https://github.com/imagemagick/imagemagick</a>

官网：<a href="https://github.com/imagemagick/imagemagick">https://github.com/imagemagick/imagemagick</a>

## 常用功能

概览：

| 功能名       | 指令概览                   |
| ------------ | -------------------------- |
| 查看图片参数 | `magick identify xx.png` |
| 图像格式转换 | `magick xx.png xx.webp` |
| 调整图像大小 | `magick input.jpg -resize 800x600 output.jpg` |
| 翻转和旋转   | `magick input.jpg -rotate 90 output.jpg` |
| 裁剪图像     | `magick input.jpg -crop 400x400+0+0 output.jpg` |
| 模糊         | `magick tiger.jpg -blur 5X5 tiger2.jpg` |

以下是详细介绍。

### 查看图片参数

不需要 GUI，我们可以通过`magick identify`直接查看图片的详细参数。

```bash
magick identify tiger.jpg
```

```bash
// 输出

```

### 图像格式转换

该工具可以实现非常便捷的图像格式转换。接下来是操作方法：

```bash
magick xx.png xx.webp  # 将 PNG 文件 xx 转换为 WebP 格式
```

同理，我们也可以转换到其他格式：

```bash
magick xx.png xx.jpg   # 将 PNG 文件 xx 转换为 JPG 格式
```

---

进一步，我们还能批量处理图片

```bash
# 将某一文件夹下的所有 .png 转换为 .jpg 格式
for ff in *.png; do magick $ff $ff.jpg; done

# convert all png in a dir to jpg
# file name should not contain ttt. if so, change ttt to hhh or something random
find . -name "*png" -print0 | xargs -0 -L1 -I ttt magick ttt ttt.jpg
```

---

### 调整图像大小

将 input.jpg 调整为 800x600 的尺寸：

```bash
magick input.jpg -resize 800x600 output.jpg
```

也可以使用百分比调整尺寸：

```bash
magick input.jpg -resize 50% output.jpg
```

### 翻转和旋转

这里展示最常用的顺时针旋转 90°. -rotate 参数默认顺时针旋转。

```bash
magick input.jpg -rotate 90 output.jpg
```

数值可以为负，表示逆时针旋转。

```bash
magick input.jpg -rotate -60 output.jpg
```

### 裁剪图像

```bash
magick input.jpg -crop 400x400+0+0 output.jpg
```

400x400 表示裁剪后的尺寸，+0+0 表示裁切起点的偏移量。坐标系以左上角为原点，右下为正。

像调整图片大小一样，裁切单位也可以是百分比：

```bash
magick input.jpg -crop 50%x50%+0+0 output.jpg
```

### 模糊

```bash
magick tiger.jpg -blur 5X5 tiger2.jpg
```

---

## 高级功能

ImageMagick 总共有以下参数：



**-quality 参数**

转换指令中，参数 `-quality` 用于指定转换过程中保留图像细节的程度。`-quality` 的数值为 0-100%，缺省时默认为 92%.

`-quality` 的计算方法没有固定的标准，是一个参考数值，具体需要看这个工具是怎么实现的。*

```bash
magick xx.png -quality 90% xx.jpg  # 将 PNG 文件 xx 转换为 JPG 格式，转换质量为 90%
```



## 常见图片格式

| 格式 | 是否有损压缩 | 色彩数 | 是否支持动画 |
| ---- | --------------------- | ------------------------ | ------------------------- |
| PNG  | 无损                  | 真彩色                   | 不支持                    |
| JPEG | 有损                  | 真彩色                   | 不支持                    |
| WebP | 即支持有损也支持无损  | 真彩色                   | 支持                      |
| GIF  | 有损                  | 256 色（8 位索引色）     | 支持                      |


## 参考
本文参考以下文章撰写：

<a href="http://xahlee.info/img/imagemagic.html">http://xahlee.info/img/imagemagic.html【ImageMagick Tutorial】</a>

<a href="https://blog.eimoon.com/p/image-processing-with-imagemagick-guide/">https://blog.eimoon.com/p/image-processing-with-imagemagick-guide/<a>