---
title: Cursor 使用指南：AI 驱动的代码编辑器入门
date: 2025-03-10
category: 工具使用
tags:
  - Cursor
  - 编程工具
  - AI
desc: 介绍 Cursor 编辑器的核心功能与使用技巧，帮助你用 AI 提升编程效率。
---

# Cursor 使用指南：AI 驱动的代码编辑器入门

Cursor 是一款基于 VS Code 的 AI 代码编辑器，集成了强大的大语言模型能力，能够辅助你完成代码编写、重构、调试和解释等任务。本文将介绍其核心功能与实用技巧。

## 什么是 Cursor

Cursor 在保留 VS Code 全部能力的基础上，增加了：

- **AI 对话**：随时与 AI 讨论代码和问题
- **智能补全**：根据上下文自动补全代码
- **代码生成**：根据自然语言描述生成代码
- **多文件编辑**：在 Composer 中跨文件修改项目

## 核心快捷键速查

| 快捷键                 | 功能                        |
| ---------------------- | --------------------------- |
| `Ctrl/Cmd + L`         | 打开 AI Chat 聊天窗口       |
| `Ctrl/Cmd + I`         | 打开 Composer（多文件编辑） |
| `Ctrl/Cmd + K`         | 行内编辑（选中代码后使用）  |
| `Ctrl/Cmd + /`         | 切换 AI 模型                |
| `Tab`                  | 接受 AI 补全建议            |
| `Ctrl/Cmd + Shift + P` | 打开命令面板                |

## 核心功能

### 1. Chat 聊天（Ctrl/Cmd + L）

在侧边栏打开 AI 聊天窗口，可以：

- 询问代码逻辑、报错原因
- 让 AI 解释某段代码
- 请求生成或修改代码

**技巧**：使用 `@` 引用文件、文件夹或符号，让 AI 基于具体上下文回答。

### 2. Composer 多文件编辑（Ctrl/Cmd + I）

Composer 支持跨文件编辑，适合：

- 新增功能（涉及多个文件）
- 重构代码
- 按需求批量修改

**用法**：描述你的需求，AI 会分析项目结构并给出修改方案，你可以在预览中确认后再应用。支持 **Agent 模式**，可自动执行多步骤任务、访问终端、搜索代码库。

### 3. 行内编辑（Ctrl/Cmd + K）

选中一段代码，按 `Ctrl/Cmd + K`，输入指令，AI 会直接修改选中部分。

适合：局部修改、小范围重构、添加注释等。

### 4. Tab 自动补全

输入时，Cursor 会根据当前文件和项目上下文给出补全建议，按 `Tab` 接受。可在设置中调整补全频率和激进程度。

## 实用技巧

### 使用 @ 引用

- `@文件名`：引用单个文件
- `@文件夹`：引用整个目录
- `@Codebase`：让 AI 搜索整个代码库
- `@Docs`：引用官方文档
- `@Notepads`：引用项目记事本（架构决策、开发指南等）

### Cursor Rules 自定义规则

在 `.cursor/rules` 中定义 AI 应遵循的编码规范，可设置全局规则（User Rules）和项目规则（Project Rules），让 AI 生成风格一致的代码。

### 编写清晰的提示词

- 说明背景：在做什么、遇到什么问题
- 给出约束：语言、框架、风格要求
- 分步描述：复杂任务拆成多个步骤

### 迭代式修改

一次修改不理想时，可以继续补充说明，让 AI 在原有结果上迭代，而不是重新生成。

## 界面设置（回归 VS Code 风格）

若习惯 VS Code 经典布局，可做如下调整：

### 1. 布局调整

按 `Ctrl/Cmd + Shift + P` 打开命令面板，选择 **Preferences: Open User Settings (JSON)**，添加：

```json
{
  // 将活动栏（左侧图标栏）的方向设为垂直，恢复经典布局
  "workbench.activityBar.orientation": "vertical",
  // 确保侧边栏位于左侧
  "workbench.sideBar.location": "left"
}
```

### 2. 主题与图标

- **颜色主题**：`Ctrl/Cmd + K` 后搜索 `Font Family`，选择 Dark+ 或 Light+
- **文件图标**：在扩展市场安装 `vscode-icons` 或 `Material Icon Theme`，按 `Ctrl/Cmd + Shift + X` 打开扩展

### 3. 导入 VS Code 配置

可从 VS Code 导入已有配置，保持使用习惯一致。

## 注意事项

1. **隐私**：代码会发送到 AI 服务端，敏感项目需注意隐私策略
2. **网络**：需要稳定网络访问 AI 服务
3. **验证结果**：AI 生成的代码要自己审查和测试后再使用

## cursor中的skills

| 分类                | 存放位置                |
| ------------------- | ----------------------- |
| 全局skills          | ~.cursor/skills         |
| 当前项目下的 skills | 当前项目/.cursor/skills |

### 安装skills

[skills.sh](https://skills.sh)

```bash
// 安装 skills制造 skills 
npx skills add https://github.com/vercel-labs/agent-browser --skill skill-creator
```

直接在热门skills网站中搜索 skills 并复制安装命令，安装时选择 cladue-code或opencalw，cursor 都可以支持读取

## 小结

Cursor 适合日常开发、学习与探索新项目。熟练使用 Chat、Composer 和行内编辑，可以明显提升编码效率。建议从简单任务开始，逐步尝试更复杂的多文件编辑和重构场景。
