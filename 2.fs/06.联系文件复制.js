/**
 * 需求:
 *  复制 当前文件夹下的human.mp4文件
 */

const fs = require('fs')
const process = require('process')
// // 方式一: 使用readFile来做
// // 读取文件内容
// let data = fs.readFileSync('./human.mp4')
// // 写入文件
// fs.writeFileSync('./human1.mp4', data)
// console.log(process.memoryUsage()); // rss: 47529984 字节 =  45 MB

// 方式二: 流式操作
// 创建读取流对象
const rs = fs.createReadStream('./human.mp4')
// 创建写入流对象
const ws = fs.createWriteStream('./human2.mp4')

// // 绑定data事件
// rs.on('data', chunk => {
//   ws.write(chunk)
// })

// 上面也可以简写
rs.pipe(ws)

rs.on('end', () => {
  console.log(process.memoryUsage());  // 43401216 字节 = 41 MB
  ws.close()
})
