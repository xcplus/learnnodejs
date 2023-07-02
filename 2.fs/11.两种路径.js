const fs = require('fs')

// 相对路径 路径参照物不是当前文件所在目录，而是相对执行命令的目录
// fs.writeFileSync('./index.html', 'love')
// fs.writeFileSync('index.html', 'hello world')
// fs.writeFileSync('../index.html', 'hello world')

// 绝对路径 
// fs.writeFileSync('index.html', 'love')

// __dirname 是所在文件的所在目录的绝对路径
console.log(__dirname)
fs.writeFileSync(__dirname + '/index.html', 'love')
