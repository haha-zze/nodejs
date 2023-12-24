const express = require('express')


// fixme router相当于是一个小型的app对象 也就是 const app = express()
const router = express.Router()

router.get('/home',(req, res) => {
    res.send('这是首页')
})

module.exports = router
