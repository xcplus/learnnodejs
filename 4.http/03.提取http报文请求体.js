// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 1. 声明一个变量
  let body = ''
  // 2. 绑定data事件 post提交表单的时候会有对应的数据
  request.on('data', chunk => {
    body += chunk
  })
  // 3. 绑定end事件
  request.on('end', () => {
    console.log('body: ', body)
    // 响应
    response.end('Hello HTTP')
  })
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
})