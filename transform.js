import fs from "fs-extra";
import path from "path";

// --- 配置区 ---
const SOURCE_DIR = "./raw_notes"; // 存放你从有道导出的所有文件夹
const TARGET_DIR = "./docs/posts"; // 转换后存放的路径
// --------------

async function transformNotes(currentDir, category = "未分类") {
  const items = fs.readdirSync(currentDir);

  for (const item of items) {
    const fullPath = path.join(currentDir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // 递归处理子文件夹，文件夹名作为分类
      await transformNotes(fullPath, item);
    } else if (item.endsWith(".md") || item.endsWith(".txt")) {
      let content = fs.readFileSync(fullPath, "utf8");

      // 1. 确定标题：优先从内容中寻找第一个 # 标题，没有则用文件名
      let title = item.replace(/\.(md|txt)$/, "");
      const titleMatch = content.match(/^#\s+(.*)/m);
      if (titleMatch) {
        title = titleMatch[1].trim();
        // 清理掉正文里的第一个 # 标题，避免和 VitePress 的渲染重复
        content = content.replace(/^#\s+.*/m, "").trim();
      }

      // 2. 确定日期：使用文件的创建时间
      const date = stats.birthtime.toISOString().split("T")[0];

      // 3. 构建 Frontmatter (适配 Open17)
      const frontmatter = `---
title: ${title}
date: ${date}
category: ${category}
tags:
  - 自动导入
---

`;

      // 4. 清洗内容：去除有道可能带有的简单 HTML 标签
      let cleanContent = content
        .replace(/<section>|<\/section>|<div>|<\/div>|<span>|<\/span>/gi, "")
        .replace(/\n{3,}/g, "\n\n") // 压缩多余空行
        .trim();

      // 5. 写入目标位置
      // 为了防止不同文件夹下有同名文件，文件名加上分类前缀
      const newFileName = `${category}-${item.replace(".txt", ".md")}`;
      fs.writeFileSync(
        path.join(TARGET_DIR, newFileName),
        frontmatter + cleanContent,
      );

      console.log(`✨ 转换成功: [${category}] ${title}`);
    }
  }
}

// 执行
console.log("🚀 开始批量转换笔记...");
fs.ensureDirSync(TARGET_DIR);
transformNotes(SOURCE_DIR).then(() => {
  console.log("\n🎉 所有笔记已转换并存入 docs/posts/");
  console.log("💡 现在运行 npm run docs:dev 即可在博客中查看！");
});
