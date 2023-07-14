// 安装ejs引擎
// 导入ejs
const ejs = require('ejs')
const fs = require('fs')

// 字符串
let china = '中国'

// 生命变量
let str = fs.readFileSync('./01.html').toString()
// 使用ejs渲染
let result = ejs.render(str, {china})

console.log(result);