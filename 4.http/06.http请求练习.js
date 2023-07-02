const http = require('http')

const server = http.createServer((request, response) => {
  // 1. 获取请求方法
  let {method} = request
  // 2. 获取请求的路径
  let {pathname} = new URL(request.url, 'http://localhost:9000')
  // 设置响应头
  response.setHeader('content-type', 'text/html;charset=utf-8')
  // 判断
  if(method === 'GET' && pathname === '/login') {
    response.end('登录页面')
  } else if (method === 'GET' && pathname === '/reg') {
    response.end('注册页面')
  } else {
    response.end('Not Found')
  }
});

server.listen(9000, () => {
  console.log('服务启动已启动: http://localhost:9000');
})