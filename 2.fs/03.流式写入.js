/**
 * 观书有感.txt
 */

// 1. 导入fs模块
const fs = require('fs')

// 2. 创建一个写入流对象, 流式写入方式更适合那种写入频次较高或大文件写入的场景, writeFile比较适合那种写入频率低的场景
const ws = fs.createWriteStream('./观书有感.txt')

// 3. write
ws.write('\t观书有感\t\n')
ws.write('半亩方塘一鉴开\n')
ws.write('天光云影共徘徊\n')
ws.write('问渠哪得清如许\n')
ws.write('为有源头活水来\n')

// 4. 关闭通道
ws.close()