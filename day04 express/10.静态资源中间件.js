const express = require('express')
const {static} = require("express");

const app = express()

// fixme 这样就可以注册一个静态资源服务器了 publick文件夹下的所有文件都可以通过路径访问 例如 http://127.0.0.1/css/index.css
// fixme 需要注意点的是 如果客户端默认进来的路径是 http://127.0.0.1 如果这个时候存在路由 / 并且如果路由代码是在静态资源中间件之上的话 那么会进入路由 如果没有这个路由或者路由代码在静态中间件之下的话 那么会默认进入静态资源文件夹也就是此时的public文件夹下解析index.html 如果找到了也会自动解析index.html
// fixme 一般来说路由响应动态资源 静态资源中间件响应静态资源
app.use(express.static(__dirname + '/public'))

app.get('/home',(req, res) => {
    res.send('hello express')
})
app.listen('80',()=>{
    console.log('服务已启动')
})
