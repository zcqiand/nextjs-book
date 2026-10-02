# Next.js从入门到项目实践 - 代码清单

## 关于本书

《Next.js从入门到项目实践》是一本「应用驱动型」的 Next.js 全栈开发实战书，带你从敲下第一行代码走到独立交付企业级 Web 应用。全书 42 章分四卷：基础入门篇讲 App Router 架构、页面与组件、链接导航、样式系统、图片与字体优化、预渲染与水合、布局模板；路由与渲染进阶篇深入动态路由与 generateStaticParams、路由组、平行路由与中断路由、中间件、服务端与客户端组件、缓存策略、use cache 指令、重新验证机制与 Server Actions；第三卷补齐表单、Route Handlers、错误与加载边界等全栈基本功；第四卷进入双案例实战与测试收官，覆盖 SSO 登录、多租户身份、RBAC 权限矩阵、OAuth 授权码流、vitest 测试策略与全书架构复盘。

技术栈与版本：基于 Next.js 15.x (App Router) 与 React 19.x，TypeScript strict 模式，配套 Tailwind CSS 4、Drizzle ORM 0.36.x 连接 PostgreSQL、Zustand 5、Vitest 2，运行环境为 Node.js 20 LTS；案例篇贯穿两个真实工程——建筑工程实验室管理系统与 SaaS 多租户身份平台。

目标读者：具备 HTML/CSS/JavaScript 基础、了解 React 基本概念的前端开发者。学完本书，你将能独立构建包含认证（SSO/OAuth）、数据库与多租户权限等功能的企业级全栈应用，掌握从项目初始化到生产部署的完整流程。

## 本书特点

**第一，应用驱动型写作。** 每章都有明确的应用目标，强调「学完本章你能交付什么」，围绕真实应用场景给出完整解决方案，而非功能清单的罗列。

**第二，决策引导型内容。** 每章都设决策框架节，讲清「在什么场景下选择什么方案」——App Router 与 Pages Router 的取舍、SSR/SSG/ISR 的适用边界、服务端组件与客户端组件的划分。

**第三，生产级可运行代码。** 所有代码都是完整可运行的工程代码，拒绝伪代码；案例篇以两个可 clone 可运行的真实仓库贯穿，每个知识点都配有可操作的练习。

**第四，版本新、话题全。** 基于 Next.js 15.x 与 React 19.x 编写，涵盖 App Router、Server Components、Server Actions、use cache 指令、Partial Prerendering 等新特性，并延伸到 SSO、多租户 RBAC、测试策略等工程化主题。

## 案例仓库

| 仓库名 | 说明 |
| :--- | :--- |
| [lab-management-system-nextjs](https://github.com/zcqiand/lab-management-system-nextjs) @ v0.3.86-20260926 | 建筑工程实验室管理系统：Next.js 15.x (App Router) + React 19.x + TypeScript 5.6.x strict + Drizzle ORM 0.36.x（postgres-js / PostgreSQL）+ Zustand 5.x + Tailwind CSS 4.x + Vitest 2.x，Node 20 LTS |
| [saas-identity-platform-nextjs](https://github.com/zcqiand/saas-identity-platform-nextjs) @ v0.7.69-20260926 | SaaS 多租户身份平台：Next.js 15.x (App Router) + React 19.x + TypeScript 5.6.x strict + Drizzle ORM 0.36.x（pg-core / PostgreSQL）+ Zustand 5.x + Tailwind CSS 4.x + Vitest 2.x，Node 20 LTS |

> 配套案例仓库为独立可跑工程，已冻结 tag，含完整测试与 CI，clone 即跑。

## 代码清单说明

本书所有代码清单均收录于本目录，对应书稿中「代码清单 N-M」标题块。

### 运行环境

```bash
# 本书代码清单以 TSX/TypeScript 为主，多为 Next.js 项目内的页面与组件文件，需 Node.js 20 LTS 与 npm
# 在案例仓（或 create-next-app 新建的项目）目录安装依赖
npm install
# 将清单放入对应路由或组件后，启动开发服务器编译运行
npm run dev
```

### 目录结构

```
src/
├── 代码清单1-* … 代码清单41-*   # 第 1-41 章，共 404 个清单文件（命名「代码清单N-M_ 描述.扩展名」）
└── extracted_code_manifest.json   # 全部清单索引（title/lang/chapter_file/line/extracted_file/source）
```
