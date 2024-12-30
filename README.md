# 雨轩文档中心

[![VitePress](https://img.shields.io/badge/VitePress-1.5.0-brightgreen.svg)](https://vitepress.dev/)
[![Vue](https://img.shields.io/badge/Vue-3.3.4-brightgreen.svg)](https://vuejs.org/)
[![Element Plus](https://img.shields.io/badge/Element_Plus-2.3.14-brightgreen.svg)](https://element-plus.org/)

基于 VitePress 的个人技术文档中心，集成开源项目文档与公开 API 文档，提供现代化的阅读体验。

## ✨ 特性

- 📚 **开源项目文档**：详细的项目使用指南和技术文档
- 🚀 **公开 API**：完整的接口文档说明
- 🎨 **现代化 UI**：基于 Element Plus 的精美界面
- ⚡️ **高性能**：VitePress 驱动的快速响应
- 🔍 **全文搜索**：便捷的文档内容检索
- 📱 **响应式设计**：完美支持移动端访问

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装

```bash
# 克隆项目
git clone https://github.com/YourUsername/yuxuan-docs.git

# 进入项目目录
cd yuxuan-docs

# 安装依赖
npm install
```

### 本地开发

```bash
# 启动开发服务器
npm run docs:dev
```

### 构建部署

```bash
# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📖 项目结构

```
yuxuan-docs/
├── .vitepress/        # VitePress 配置
├── public-api/        # API 文档
├── open-source/       # 开源项目文档
├── public/           # 静态资源
└── index.md          # 首页
```

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request 来帮助改进项目。

## 📝 开源协议

本项目采用 [ISC License](LICENSE) 开源协议。 