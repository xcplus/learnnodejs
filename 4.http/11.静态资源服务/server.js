/**
 * 创建一个 HTTP 服务， 端口为9000， 满足如下需求
 * get /index.html  响应 page/index.html 的文件内容
 * get /css/app.css 响应 page/css/app.css 的文件内容
 * get /images/logo.png 响应 page/images/logo.png 的文件内容
 */

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  // 获取请求的URL路径
  let { pathname } = new URL(request.url, 'http://localhost:9000')
  // 拼接文件路径
  let filePath = __dirname + '/page' + pathname
  // 读取文件 fs 异步 API
  fs.readFile(filePath, (err, data) => {
    if(err) {
      response.statusCode = 404
      response.end('Not found')
      return 
    } 
    response.end(data)
  })
})

server.listen(9000, () => {
  console.log('服务已经启动， http://localhost:9000');
})