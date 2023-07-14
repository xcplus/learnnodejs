/**
 * 注意: 
 * 1. index.html 文件默认为打开的资源
 * 2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
 * 3. 路由响应动态资源，静态资源中间件响应静态资源
 */
// 1. 导入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头中的 referer 是否为 127.0.0.1
  // 获取 referer
  let referer = req.get('referer')
  console.log(referer);
  if(referer) {
    // 实例化
    let url = new URL(referer)
    // 获取 hostname
    let hostname = url.hostname
    // 判断
    if(hostname !== '127.0.0.1') {
      // 响应404
      res.status(404).send('<h1>404 Not Found</h1>')
      return
    }
  }
  next();
})

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))

// 4. 监听端口，启动服务
app.listen(9000, () => {
  console.log('服务已经启动，端口: 9000, 链接: http://localhost:9000')
})