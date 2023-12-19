const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
    res.end('express搭建的服务')
})


app.listen('3000',()=>{
    console.log('服务已经启动，运行在3000的端口')
})
