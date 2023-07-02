// 导入 http 模块
const http = require('http')
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求URL的路径
  console.log("request.url: ", request.url)
  let {pathname} = new URL(request.url, 'http://localhost:9000')
  if(pathname === '/') {
    const html = fs.readFileSync(__dirname + '/table.html')
    response.end(html)
  } else if (pathname === '/index.css') {
     const css = fs.readFileSync(__dirname + '/index.css')
     response.end(css)
  } else if (pathname === '/index.js') {
    const js = fs.readFileSync(__dirname + '/index.js')
    response.end(js)
  } else {
    response.statusCode = 404
    response.end('Not found')
  }
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
})