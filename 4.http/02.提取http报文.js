// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求方法
  console.log('请求方法: ', request.method)
  // 获取请求的URL
  console.log('请求的URL: ', request.url) // 只包含url中的路径与查询字符串
  // http协议的版本号
  console.log('http协议的版本号: ', request.httpVersion)
  // 获取http的请求头
  console.log('获取http的请求头: ', request.headers)
  
  response.end('Hello HTTP Server') // 设置响应体
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
})