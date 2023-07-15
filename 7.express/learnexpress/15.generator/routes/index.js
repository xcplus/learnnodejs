var express = require('express');
const formidable = require('formidable')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页(表单)
router.get('/portrait', (req, res) => {
  res.render('portrait')
})

// 处理文件上传
router.post('/portrait', (req, res) => {
  // 创建表单对象
  const form = new formidable.IncomingForm({
    multiples: true,
    // 保存目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true
  });

  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log('fields: ', fields);
    console.log('files: ', files);
    let url = '/images/' + files.avatar[0].newFilename
    res.send(url)
  });
})

module.exports = router;
