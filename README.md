### 文件写入场景
1. 下载文件
2. 安装软件
3. 保存程序日志，如：Git
4. 编辑器保存文件
5. 视频录制

** 当持久化保存数据的时候，应该想到文件写入

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