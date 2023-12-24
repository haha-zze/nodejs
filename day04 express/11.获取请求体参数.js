const express = require('express')

const app = express()

// fixme 需求：如果用户登录发起的是get请求且路径是/login 那么响应一个登录页面 如果用户发起的是post请求且路径为login 那么获取用户传过来的登录信息

app.get("/login",(req, res) => {
    res.sendFile(__dirname + '/11_index.html')
})

// fixme 解析客户端传过来的参数需要用到一个包 body-parser
const bodyParser = require('body-parser')
const {query} = require("express");

// fixme 解析json格式的数据
const jsonParser = bodyParser.json()

// fixme 解析queryString格式的数据
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post("/login",urlencodedParser,(req, res) => {
    console.log(req.body)

    res.send("post请求login")
})

app.listen('80',()=>{
    console.log('服务已启动')
})
