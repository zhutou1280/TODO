# TODO

简单的 todolist 备忘录，使用 antd 的 UI 组件，mongodb 存储数据，express 做 server 端。

## 应用介绍

### 0. 安装

进入 antUI 目录`npm i` 安装，进入 todoServer 目录`npm i` 安装。预先需装好 mongodb 数据库。

### 1. UI

UI 使用 antd 的组件

### 2. Server

Server 使用 express 搭建，未使用模板引擎。

### 3. 数据库

数据库使用 mongodb，需要先安装 mongodb。

### 4. 日志记录

日志通过标准输出重定向到 todoLog.txt

### 5. 打包部署

目前 UI 需要手动打包，进入 antui 目录，npm run build 打包，将 public 中的文件拷贝到 todoServer 的 public 目录中。

启动服务器 windows 下可以双击 build.vbs，后台启动运行。

测试