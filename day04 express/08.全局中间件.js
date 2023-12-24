const express = require('express')

const app = express()

const path = require('path')

const fs = require('fs')

// fixme 需求：记录每一个用户访问的url和用户的ip地址 并将记录写入到一个文件中去


// fixme 定义全局中间件（个人感觉比较像axios的拦截器）
const recordMiddleware = (req, res, next) => {
    let {url, ip} = req
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `url:${url},  ip:${ip}\r\n`)

    // fixme 最后记得要next 否则路由不会执行
    next()
}


app.use(recordMiddleware)
app.get('/admin', (req, res) => {
    let {url, ip} = req
    console.log(url, ip)
    res.send('/admin')
})

app.get('/home', (req, res) => {
    res.send('/home')
})

app.all("*", (req, res) => {
    res.send('404 没有找到')
})

app.listen('80', () => {
    console.log('服务已启动')
})
