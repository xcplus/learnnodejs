// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  response.end('Hello HTTP Server')
  // response.setHeader('content-type', 'text/html;charset=utf-8')
  // response.end('你好')
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
})

/**
 * 注意事项:
 * 1. 命令行 ctrl + c 停止服务
 * 2. 当服务启动后，更新代码必须重启服务才生效
 * 3. 响应内容中文乱码的解决办法
 * `response.setHeader('content-type', 'text/html;charset=utf-8');`
 * 4. 端口号被占用
 * `Error: listen EADDRINUSE: address already in use :::9000`
 *  1) 关闭当前正在运行监听端口的服务
 *  2）修改其他端口号
 * 5. HTTP协议默认端口是80。HTTPS协议的默认端口是443, HTTP服务开发常用端口有3000、8080、8090、9000等
 */