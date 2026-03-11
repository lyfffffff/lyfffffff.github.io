---
title: OpenClaw 使用指南：开源个人 AI 助手
date: 2025-03-10
tags:
  - OpenClaw
  - AI
  - 自动化
  - 开源
  - Windows
desc: 介绍 OpenClaw 的安装、配置与核心功能，打造你的个人 AI 助手。含 Windows 保姆级安装教程。
---

# OpenClaw 使用指南：开源个人 AI 助手

OpenClaw（小龙虾）是一款开源的个人 AI 助手，支持在飞书、钉钉、企业微信、Telegram 等平台接入，并能执行文件操作、网页浏览、消息发送等实际任务。本文介绍如何快速上手，**Windows 用户可按保姆级步骤 10 分钟搞定**。

> 📺 **视频教程**：[OpenClaw小龙虾保姆级安装教程！小白10分钟搞定【Windows系统】](https://www.youtube.com/watch?v=A4PLqwDligE)（林粒粒呀）

## 什么是 OpenClaw

OpenClaw 的核心特点：

- **开源免费**：可自托管，数据可控
- **多平台接入**：飞书、钉钉、企业微信、Telegram、Discord 等
- **任务执行**：读写文件、浏览网页、发送消息、定时任务等
- **跨平台**：支持 macOS、Windows、Linux

## 安装前准备（Windows）

在安装前请确认：

- **Node.js** ≥ 22（必须）
- **Windows 10/11**
- **PowerShell**（系统自带）

## Windows 保姆级安装

### 1. 解决执行策略问题

若运行安装命令时提示「无法加载，因为在此系统上禁止运行脚本」，以**管理员身份**打开 PowerShell，执行：

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

### 2. 运行安装脚本

以**管理员身份**打开 PowerShell，执行：

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

或使用 npm 安装：

```powershell
npm i -g openclaw@latest
```

### 3. 设置网关并启动

```powershell
openclaw config set gateway.mode local
openclaw gateway install
openclaw gateway start
```

### 4. 运行配置向导

```powershell
openclaw onboard
```

按向导提示完成基础配置。

### 常见错误

| 问题           | 解决方案                                                          |
| -------------- | ----------------------------------------------------------------- |
| 脚本执行被拒绝 | 执行 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force` |
| 安装卡住/超时  | 检查网络，可重试；国内用户确保已配置 npmmirror                    |
| 网关无法访问   | 运行 `openclaw gateway probe` 检查状态                            |

### 验证安装成功

```powershell
openclaw --version
openclaw doctor
openclaw dashboard
```

浏览器自动打开 `http://127.0.0.1:18789` 即表示安装成功。

## 配置步骤

### 1. 配置 AI 模型

需要配置大模型 API，常见选择：

- **国内**：Kimi、MiniMax、通义千问、DeepSeek 等
- **国际**：Claude、OpenAI GPT 等

在向导中填入对应服务的 API Key。**新手推荐**：Kimi k2.5 有约 15 元免费额度，适合先试用。

### 2. 连接聊天平台

```powershell
openclaw channels add
```

建议先从 **Telegram** 开始（配置简单），或直接接入 **飞书** 方便日常使用。可在 Web UI 中完成后续配置。

### 3. Web 管理界面

配置完成后访问 `http://127.0.0.1:18789`，用于查看状态、管理通道和技能。

## 核心能力

### 工具类型

| 类型     | 功能               |
| -------- | ------------------ |
| 文件系统 | 读写、编辑文件     |
| 浏览器   | 打开网页、执行操作 |
| 消息     | 跨平台发送消息     |
| 自动化   | 定时任务、执行命令 |
| 记忆     | 保存与检索知识     |

### 常用命令

```powershell
openclaw skills list      # 查看已安装技能
openclaw gateway start    # 启动网关服务
openclaw gateway status   # 查看网关状态
openclaw dashboard       # 打开 Web 管理界面
```

## 部署方式

- **本地部署**：数据在本地，适合个人使用
- **云服务器**：部署到阿里云等，可 7×24 运行
- **MaxClaw 云端**：官方托管方案，零运维

## 使用建议

1. 先用 QuickStart 完成基础配置，确保能正常对话
2. 优先接入一个常用平台（如 Telegram 或飞书）
3. 按需开启工具，注意权限与安全
4. 遇到问题可查阅 [OpenClaw 官方文档](https://openclaw.cc/)

## 小结

OpenClaw 适合希望把 AI 接入日常工作流的用户。通过上述步骤，Windows 用户约 10 分钟即可完成安装与基础配置，在常用聊天工具中与 AI 协作，并执行文件、网页、消息等实际任务。
