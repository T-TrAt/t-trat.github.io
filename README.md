# T-TrAt 的博客

基于 Astro 和 [Astro Micro](https://github.com/trevortylerlee/astro-micro)，站点地址为 https://t-trat.github.io/。

## 本地使用

使用 Node.js 24（见 `.nvmrc`）：

```sh
npm ci
npm run dev
```

`npm run build` 运行 Astro 类型检查并生成静态网站及 Pagefind 搜索索引；`npm run preview` 预览构建结果。

## 内容位置

- `src/content/blog/<文章名>/index.md`：博客文章，目前迁入 ImageMagick、texttable、Icarus Verilog 和 FFmpeg 共 4 篇。
- `src/content/projects/`：项目文章，目前为空。
- `src/content/drafts/2026-10-x1-FJ.md`：捕鱼课设草稿，未注册为内容集合，不会生成页面、进入搜索或 RSS。确认标题、日期和归属后，再补全元数据并移入博客或项目目录。
- `src/pages/about.md`：About 页面。
- `public/imgs/`：原始图片及绘图文件，对应网站 `/imgs/` 路径。

博客文章需要 `title`、`description`、有效的 `date`；`tags` 使用字符串数组。支持 `draft: true` 隐藏文章、`toc: false` 隐藏目录，以及 `author` 和 `last_modified_at`。日期显示采用 `Asia/Shanghai` 时区。

已按确认移除旧 Jekyll 和 Astro 模板的全部示例文章、示例项目与无引用示例图片。迁移保留正文中的未完成内容，仅转换元数据及修复 HTML 闭合标签、代码块语言大小写。

## 配置与部署

- `astro.config.mjs`：站点地址，用于 canonical、RSS 和 sitemap。
- `src/consts.ts`：姓名、介绍、邮箱和社交链接，沿用原博客配置。
- `.github/workflows/deploy.yml`：推送到 `main` 或手动触发时，构建并部署到 GitHub Pages。仓库 Pages 的 Source 应选择 GitHub Actions。
- `.env.example`：可选的 Giscus 评论设置。未配置时不加载评论。
- `.gitignore`：忽略依赖、构建产物、本地缓存和环境变量；源码及草稿仍纳入版本管理。

原 `.git` 和提交历史保留，远程 `origin` 为 `https://github.com/T-TrAt/t-trat.github.io.git`。迁移工作不会自动提交或推送。
