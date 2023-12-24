const express = require('express')

const app = express()

// fixme 需求是检查客户端请求有没有携带参数code并且code为521 如果有则正常响应页面 没有则响应参数错误


// fixme 路由中间件 和全局中间件不一样 全局中间件是直接在app中use注册 路由中间件是在需要的路由上注入
const checkCodeMiddleware = (req,res,next)=>{
    let {code} = req.query
    if(code && code == 521) {
        next()
    } else {
        res.send('参数错误')
    }
}

app.get('/home',checkCodeMiddleware,(req, res) => {
    res.send('前台页面')
})

app.get('/admin',checkCodeMiddleware,(req, res) => {
    res.send('后台页面')
})

app.get('/setting',checkCodeMiddleware,(req, res) => {
    res.send('设置页面')
})

app.listen('80',()=>{
    console.log('服务已启动')
})
