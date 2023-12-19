const express = require('express')

const app = express()

app.get('/home', (rea, res) => {
    res.end('这是home')
})

app.get('/', (req, res) => {
    res.end('这是首页')
})

app.post('/submit', (req, res) => {
    res.end('提交了')
})

// todo 这是匹配所有请求方式中请求路径为/test的请求
app.all('/test', (req, res) => {
    res.end('忽略请求方法，只匹配路径')
})

// todo 响应404
app.all('*', (req, res) => {
    res.end('404，notfound')
})

app.listen('80',()=>{
    console.log('服务已启动')
})
