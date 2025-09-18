# 基于React搭建的管理后台系统

## 技术框架

- ES6/7 Vanilla JS
- ESLint (代码规范)
- React
- Mobx (统一状态管理)
- React Router (路由)
- ECharts (常规图表框架)
- Mock.js (模拟数据服务)
- Babel (ES6/7代码转译浏览器可执行)
- Webpack (打包工具)
- React Amap (高德地图)
- Visjs (拓扑图)

## 目录结构

```bash
.
├── config # webpack 配置目录
├── res # 静态文件目录
└── src # 前端源码目录
    ├── index.html # layout
    ├── main.js # 入口文件
    ├── component # 组件目录
    ├── pages # 页面目录
    ├── store # Mobx状态管理
    ├── testdata # 模拟数据目录
    	├── localdata # 本地测试数据
    │   └── mockdata # 模拟数据服务器
    └── utils # 基础配置文件
```
## 安装

```bash
git clone https://github.com/labnize/react-router-antd-webpack-gulp.git
cd react-router-antd-webpack-gulp
npm install
```
npm install --global gulp

## 调试

Just run "gulp" in this root folder
```
gulp
```

## 打包

Just run "gulp build" in this root folder
```
gulp build
```


https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5

npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated natives@1.1.2: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.
npm WARN frame@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
