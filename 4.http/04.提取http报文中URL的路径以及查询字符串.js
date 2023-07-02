// 导入 http 模块
const http = require('http')
// 1. 导入 url 模块
const url = require('url')

// 创建服务对象
const server = http.createServer((request, response) => {
  console.log('request.url: ', request.url)
  // 2. 解析 request.url 第二个参数设置成true会把查询字符串转换成key-value对象
  let res = url.parse(request.url, true)
  console.log('解析后的结果: ', res)

  // 路径
  let pathname = res.pathname
  console.log('解析后的路径: ', pathname)

  // 查询字符串
  let query = res.query
  console.log('查询字符串，解析成对象: ', query)
  response.end('Hello url')
})

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
})