const ejs = require('ejs')
const fs = require('fs')
const fruit = ['苹果', '香蕉', '荔枝', '榴莲', '山竹']

const template = fs.readFileSync('./02.html').toString()
// ejs
const result = ejs.render(template, {fruit})

console.log(result);