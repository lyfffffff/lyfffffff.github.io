# VitePress 个人博客

基于 **VitePress** 和 **vitepress-theme-open17** 主题的个人知识库与博客项目，支持部署到 GitHub Pages。

## 技术栈

- **VitePress** - 静态站点生成器
- **vitepress-theme-open17** - 简洁美观的博客主题
- **Node.js** - 运行环境
- **Markdown** - 内容编写

## 项目结构

```
vitpress-blog/
├── docs/
│   ├── index.md          # 首页（Hero + 快捷导航）
│   ├── blog.md           # 博客列表页
│   ├── about.md          # 关于页
│   ├── notes/            # 笔记（知识库）
│   │   ├── javascript.md
│   │   ├── css.md
│   │   └── linux.md
│   ├── blog.md           # 博客列表页（layout: blog）
│   ├── posts/            # 博客文章目录（主题要求，文章放此处）
│   │   └── first-post.md
│   ├── tools/            # 工具导航
│   │   ├── index.md
│   │   ├── ai-tools.md
│   │   ├── dev-tools.md
│   │   └── learning-resources.md
│   └── public/
│       └── logo.svg
├── .vitepress/
│   ├── config.ts         # VitePress 配置
│   └── theme/
│       └── index.ts      # 主题入口
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages 部署
├── package.json
├── uno.config.ts
└── README.md
```

## 安装

```bash
# 克隆项目后，安装依赖
npm install
```

> 若遇到依赖冲突，项目已配置 `.npmrc` 使用 `legacy-peer-deps`，安装应可正常完成。

## 本地开发

```bash
npm run docs:dev
```

访问 http://localhost:5173 查看效果。

## 构建与预览

```bash
# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 部署到 GitHub Pages

### 1. 配置 base 路径

在 `docs/.vitepress/config.ts` 中修改 `base` 配置：

- **项目站点**（如 `username.github.io/vitpress-blog`）：`base: '/vitpress-blog/'`
- **用户站点**（如 `username.github.io`）：`base: '/'`

将 `vitpress-blog` 替换为你的仓库名。

### 2. 配置 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 进入仓库 **Settings** → **Pages**
3. 在 **Build and deployment** 中选择 **GitHub Actions**
4. 推送代码到 `main` 分支后，工作流会自动构建并部署

### 3. 部署流程

- 推送代码到 `main` 分支
- GitHub Actions 自动执行：安装依赖 → 构建 VitePress → 部署到 Pages
- 部署完成后访问：`https://<username>.github.io/<repo-name>/`

## 功能说明

### 首页

- Hero 区域：标题、简介、行动按钮
- 快捷导航卡片：Notes、Tools、Blog

### 笔记（Notes）

- 侧边栏导航
- 支持多篇笔记分类管理

### 工具（Tools）

- 按类别整理的网站导航
- AI Tools、Developer Tools、Learning Resources

### 博客（Blog）

- 支持 `date`、`tags`、`desc` 等 frontmatter
- 支持置顶（`pin: true`）
- 阅读时间由主题自动计算

博客文章需放在 `docs/posts/` 目录下，支持子目录分类。

### 关于页

- 个人简介与联系方式

## 自定义配置

- **站点标题/描述**：修改 `docs/.vitepress/config.ts` 中的 `title`、`description`
- **导航栏**：修改 `themeConfig.nav`
- **侧边栏**：修改 `themeConfig.sidebar`
- **社交链接**：修改 `themeConfig.socialLinks`，将 `lyfffffff` 替换为你的 GitHub 用户名

## License

MIT
