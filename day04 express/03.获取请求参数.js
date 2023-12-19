const express = require('express')

const app = express()

app.get('/request',(req,res)=>{
    // todo 原生操作
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.headers)

    // todo express操作
    // console.log(req.path)  //  /request
    // console.log(req.query) //  {}  我没有在页面上拼接参数 如果拼接了参数也会在这里能拿到
    // console.log(req.ip)  // ::ffff:127.0.0.1
    console.log(req.host)   // 127.0.0.1
    res.end('hello express')
})

app.listen('80',()=>{
    console.log('服务已经启动，端口是默认端口80')
})
