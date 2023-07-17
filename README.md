https://www.bilibili.com/video/BV1gM411W7ex/?p=106&spm_id_from=pageDriver&vd_source=26a4aad2cbda10f889b9011c4ba6bbcc

### 文件写入场景
1. 下载文件
2. 安装软件
3. 保存程序日志，如：Git
4. 编辑器保存文件
5. 视频录制

** 当持久化保存数据的时候，应该想到文件写入


registry=https://registry.npmmirror.com/

pnpm set registry https://registry.npmmirror.com/

### 读取文件的应用场景
1. 电脑开机
2. 程序运行
3. 编辑器打开文件
4. 查看图片
5. 播放视频和音乐
6. 查看日志
7. 上传文件
8. 查看聊天记录


### 协议
双方必须共同遵从的一组约定

### HTTP协议的报文
可以通过 fiddler 这个工具查看报文

状态码            含义
1xx             信息响应
2xx             成功响应
3xx             重定向消息
4xx             客户端错误响应
5xx             服务端错误响应


###  资源类型(mime类型)
用来表示文档、文字或字节流的性质和格式。
```js
// mime 类型结构: [type]/[subtype]
// 例如: text/html text/css image/jpeg image/png application/json
```
http服务可以设置响应头Content-Type来表明响应体的MIME类型。
下面是常见文件对应的mime类型:
```js
const mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}
```

```js
// 对于未知的资源类型，可以选择application/octet-stream类型, 浏览器在遇到该类型的响应时，会对响应体
// 内容进行独立存储，也就是我们常见的下载效果
```

### 导入模块的基本流程
require 导入 自定义模块 的基本流程.
1. 将相对路径转为绝对路径，定位目标文件
2. 缓存检测
3. 读取目标文件代码
4. 包裹为一个函数并执行(自执行函数). 通过 arguments.callee.toString() 查看自执行函数
5. 缓存模块的值
6. 返回 module.exports 的值

### CommonJS 规范
module.exports\exports\require 这些都是 CommonJS 模块化规范中的内容.
而 Node.js 是实现了 CommonJS 模块化规范，二者关系有点像 Javascript 与 ECMAScript

### 包管理工具

#### 1. 概念介绍
  ##### 1.1 包是什么
  代表了一组特定功能的源码集合
  ##### 1.2 包管理工具
  管理包的应用软件，可以对包进行下载安装、更新、删除、上传等操作
  借助包管理工具，可以快速开发项目，提升开发效率
  包管理工具是一个通用的概念，很多编程语言都有包管理工具，所以掌握好包管理工具非常重要
  ##### 1.3 常用的包管理工具
  - npm
  - yarn
  - pnpm
  - cnpm
#### 2. npm
  ##### 2.1 介绍
  npm 全称 Node Package Manager， 中文是Node的包管理工具
  npm 是 node.js 官方内置的包管理工具，是必须掌握的工具
  ##### 2.2 npm 的安装
  node.js 在安装时会自动安装 npm， 所以如果安装了 node.js, 可以直接使用 npm
  可以通过 npm -v 查看版本号测试，如果显示版本号说明安装成功，反之安装失败

  ###### 2.2.1 初始化
  创建一个空目录，然后以此目录作为工作目录启动命令行工具，执行 npm init
  npm init 命令的作用是将文件夹初始化一个包，交互式创建 package.json 文件
  package.json 是包的配置文件，每个包都必须要有 package.json
  ```javascript
  {
    "name": "test", // 包名 不能使用中文、大写，默认是文件夹名称，所以文件夹名称也不能有中文和大写
    "version": "1.0.0", // 包的版本 要求 x.x.x 的形式定义，x必须是数字，默认是1.0.0
    "description": "学习npm", // 包的描述
    "main": "index.js", // 包的入口文件
    "scripts": { // 脚本配置
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "", // 作者
    "license": "ISC" // 开源证书
  }
  ```
  ###### 2.2.2 搜索包
  有两种方式:
  1. 命令行 `npm s/search 字符串`
  2. 网站搜索 网址是 (https://www.npmjs.com/)[https://www.npmjs.com/]
  ###### 2.2.3 下载安装包
  npm install <包名>
  npm i <包名>
  ###### 2.2.4 require 导入 npm 包基本流程
  1. 当前文件夹下 node_modules 中寻找同名的文件夹
  2. 在上级目录中下的 node_modules 中寻找同名的文件夹，直至找到磁盘根目录

### express 中间件
  1. 什么是中间件
  中间件(Middleware)本质是一个回调函数
  中间件函数可以像路由回调一样访问 `请求对象(request)`、`响应对象(response)`
  2. 中间件的作用
  中间件的作用就是使用函数封装公共操作，简化代码
  3. 中间件的类型
  · 全局中间件
  · 路由中间件

  3.1  定义全局中间件
    每一个请求到达服务端之后都会执行全局中间件函数
    声明中间件函数
    ```javascript
      let recordMiddleware = function(request, response, next) {
        // 实现功能代码
        // ...
        // 执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
        next()
      }
    ```

### RESTful API
是一种特殊风格的接口，主要特点有如下几个:
1. URL中的路径表示资源，路径中不能有动词，例如create、update、delete等这些都不能有
2. 操作资源要与HTTP请求方法对应
3. 操作结果要与HTTP响应状态码对应


### cookie
1. cookie是HTTP服务器发送到用户浏览器并保存在本地的一小块数据
cookie 是保存在浏览器端的一小块数据
cookie 是按照域名划分保存的
2. cookie的特点: 浏览器向服务器发送请求时，会自动将当前域名下可用的cookie设置在请求头中，然后传递给服务器

