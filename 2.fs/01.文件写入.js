/**
 * 需求:
 * 新建一个文件，座右铭.txt, 写入内容，三人行，则必有我师焉
 */

// 1. 导入fs模块
const fs = require('fs')

// 2. 异步写入文件 writeFile(file文件名，data代写入的数据，options选项设置，callback写入回调)
// fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
//   // err 写入失败：错误对象；写入成功：null
//   if(err) {
//     console.log('写入失败：', err);
//     return
//   }
//   console.log('写入成功.')
// })

// 3. 同步写入
fs.writeFileSync('./座右铭.txt', '有朋自远方来，不亦乐乎')