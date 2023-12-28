var express = require('express');
var router = express.Router();
const accountModel = require('../module/account.js')
/* GET home page. */

// 列表页
router.get('/index', function(req, res, next) {
  accountModel.find({}).then(bookList=>{
    console.log(bookList,"bookList")
    res.render('index', { bookList: bookList });
  })
});

// 创建页面
router.get('/form', function(req, res, next) {
  res.render('create');
});

// 创建接口
router.post('/create', function(req, res, next) {
  console.log(req.body,"提交过来的信息");
  accountModel.create(req.body).then(function(){
    res.render('success',{msg: '添加成功',url:'/book/index'});
  })
});


module.exports = router;
