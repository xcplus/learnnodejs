const fs = require('fs')
const path = require('path')

// 写入文件
// fs.writeFileSync('index.html', 'love')

// resolve
// let resovePath = path.resolve(__dirname, './index.html')
let resovePath = path.resolve(__dirname, 'index.html')
console.log('resolvePath: ', resovePath);

// sep 获取操作系统的路径分隔符
console.log('path.sep: ', path.sep)

// parse 解析路径并返回对象 __filename是文件的绝对路径
console.log('__filename: ', __filename)
let str = '/Users/xcasx/Projects/Node/尚硅谷2023版/3.path/path.js'
console.log('path.parse: ', path.parse(str))
// path.parse:  {
//   root: '/',
//   dir: '/Users/xcasx/Projects/Node/尚硅谷2023版/3.path',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

// basename 获取路径的基础名称
console.log('path.basename: ', path.basename(str));

// dirname 获取路径的目录名
console.log('path.dirname: ', path.dirname(str));

// extname 获取路径的扩展名
console.log('path.extname: ', path.extname(str));
