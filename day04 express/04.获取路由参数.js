const express = require('express')

const app = express()

// todo 这里id是一个动态的值 获取动态的id参数
app.get('/:id.html',(req,res)=>{
    // todo 此时我在页面上输入 http://127.0.0.1/11.html 使用req.params.id可以动态的获取id这个路由参数
    console.log(req.params.id)  // 11
    res.send('商品详情')
})

app.listen('80',()=>{
    console.log('服务已启动')
})
