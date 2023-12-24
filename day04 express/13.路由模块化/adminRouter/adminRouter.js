const express = require('express');

// fixme router相当于是一个小型的app对象 也就是 const app = express()
const router = express.Router()

// fixme 此处可以单独为router注册中间件
router.get('/admin',(req, res) => {
    res.send('后台页面')
})


module.exports = router
