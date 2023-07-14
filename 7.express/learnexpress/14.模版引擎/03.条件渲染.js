/**
 * 通过 isLogin 决定最终的输出内容
 * true 输出【<span>欢迎回来</span>】
 * false 输出【<button>登录</button><button>注册</button>】
 */
const ejs = require('ejs')
const fs = require('fs')
// 变量
let isLogin = true;

const html = fs.readFileSync('./03.html').toString()

const result = ejs.render(html, {isLogin})

console.log(result);