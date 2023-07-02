const http = require('http')

const server = http.createServer((request, response) => {
  // 1. 设置响应状态码
  response.statusCode = 200
  // 2. 响应状态的描述
  response.statusMessage = 'iloveyou'
  // 3. 响应头
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.setHeader('Server', 'Node.js')
  response.setHeader('myHeader', 'test test test')
  // 设置多个同名的响应头
  response.setHeader('test', ['a', 'b', 'c'])
  // 4. 响应体的设置
  // 1) write写入
  response.write('love') // 如果是用的write，一般就不会在end里设置响应体了, write可以多次调用
  response.write('family')
  // response.end()
  // 2) request 绑定 data 和 end 方法, 在end 方法中调用 response的写入以及response.end方法
  /**
   * let body = ''
   * request.on('data', chunk => {
   *  body += chunk
   * })
   * request.on('end', () => {
   *  response.end('abc')
   * })
   */

  response.end() // 这个只能有一个end方法
})

server.listen(9000, () => {
  console.log('服务已经启动, 查看链接: 127.0.0.1:9000');
})