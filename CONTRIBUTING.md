# 贡献指南

感谢你考虑为 VoxC 项目做出贡献！我们欢迎任何形式的贡献，包括但不限于功能改进、bug 修复、文档完善等。

## 开始之前

- 确保你已经阅读了我们的 [README.md](./README.md)
- 查看现有的 [Issues](https://github.com/JacksonHe04/voxc/issues) 和 [Pull Requests](https://github.com/JacksonHe04/voxc/pulls)，避免重复工作
- 如果你计划开发新功能，建议先创建一个 Issue 讨论

## 开发流程

1. Fork 项目仓库
2. 克隆你的 Fork 仓库到本地
   ```bash
   git clone https://github.com/YOUR_USERNAME/voxc.git
   ```
3. 创建新的特性分支
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. 进行开发并提交改动
   ```bash
   git add .
   git commit -m "feat: add some feature"
   ```
5. 推送到你的 Fork 仓库
   ```bash
   git push origin feature/your-feature-name
   ```
6. 创建 Pull Request

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，提交信息格式如下：

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

常用的 type 类型：
- feat: 新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 代码规范

- 遵循项目现有的代码风格
- 确保代码通过 ESLint 检查
- 为新功能编写测试用例
- 保持代码简洁清晰，添加必要的注释

## Pull Request 规范

- PR 标题要简洁明了，描述本次改动的主要内容
- 在 PR 描述中详细说明改动原因和具体改动内容
- 确保所有自动化测试通过
- 如果是修复 bug，请在 PR 中关联相关的 Issue

## 开发环境设置

1. 安装依赖
   ```bash
   # 前端
   cd client
   pnpm install

   # 后端
   cd server
   pnpm install
   ```

2. 运行开发服务器
   ```bash
   # 前端
   cd client
   pnpm dev

   # 后端
   cd server
   pnpm dev
   ```

## 问题反馈

如果你发现了 bug 或有新的功能建议，请创建新的 Issue。创建 Issue 时请：

- 使用清晰的标题
- 详细描述问题或建议
- 如果是 bug，请提供复现步骤和相关日志
- 如果可能，提供截图或录屏

## 获取帮助

如果你在贡献过程中遇到任何问题，可以：

- 在相关 Issue 下留言
- 在 PR 中 @ 相关维护者
- 通过项目的沟通渠道寻求帮助

再次感谢你的贡献！