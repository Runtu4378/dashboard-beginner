


### 搭建环境

下载并安装nodejs
`https://nodejs.org/zh-cn/`

安装cnpm
`npm install -g cnpm --registry=https://registry.npm.taobao.org`

安装angular-cli
`cnpm install angular-cli -g`

安装typescript
`cnpm install typescript -g`

进入项目目录
`cd dashboard`

执行命令(安装依赖)
`cnpm install`

执行以上步骤后(启动开发调试模式)
`ng serve`

-------

### 常用命令

运行及构建
`ng serve || ng g [component/directive/pipe/service/class] name`   

编译(前者正常打包|后者高度压缩及首屏优化打包)
`ng build || ng build --prod [-aot]`
------

### 额外的脚手架命令

|组件构成 | 用法|
|:--:|:--:|
|Component|ng g component my-new-component|
|Directive|ng g directive my-new-directive|
|Pipe|ng g pipe my-new-pipe|
|Service|ng g service my-new-service|
|Class|ng g class my-new-class|
|Interface|ng g interface my-new-interface|
|Enum|ng g enum my-new-enum|
|Module|ng g module my-module|
	
------------	
	


### 目录结构
```Dashboard
src
├─app
│  ├─models //实体
│  ├─pages //页面
│  ├─services  //服务
│  └─widgets   //公共组件
│      ├─mit-header
│      ├─mit-layout
│      └─mit-sidebar
├─assets //资源
└─environments //全局环境变量
```
------------	
	