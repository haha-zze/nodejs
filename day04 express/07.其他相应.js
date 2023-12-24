
const express = require('express')

const app = express()

const path = require('path')
app.get('/other',(req, res) => {

    // fixme 重定向响应
    // res.redirect('https://www.baidu.com')

    // fixme 下载相应
    // res.download(path.resolve(__dirname,'./package.json'))

    // fixme json响应
    // res.json({
    //     name:"嘿嘿嘿",
    //     age:18
    // })

    // fixme 响应文件内容
    // res.sendFile(__dirname  + '/index.html')
})

app.listen('80',()=>{
    console.log('服务已开启')
})
