// 导入 http 模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
  // 实例化一个URL对象
  let url = new URL(request.url, 'http://localhost:9000')
  console.log('实例化URL后的对象: ', url);
  // 输出路径
  console.log('输出路径: ', url.pathname)
  // 输出查询对象
  console.log('输出查询对象: ', url.searchParams);
  console.log('输出查询对象中的start_time对应的值: ', url.searchParams.get('start_time'));
  response.end('Hello url')
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
})