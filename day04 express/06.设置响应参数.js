import express  from 'express'

const app = express()

app.get('/response',(req, res) => {
    // todo 原生操作
    // 设置状态吗
    // res.statusCode = 200
    // // 设置响应头
    // res.setHeader('aaa','bbb')
    // // 设置请求状态描述
    // res.statusMessage = 'love'
    // // 设置响应体
    // res.write('我是write设置的响应体')
    // res.end('你好 express')


    // todo express操作
    res.status(200)
    // 设置响应头
    res.set('aaa','bbb')
    res.send('你好 express')
})

app.listen('80',()=>{
    console.log('服务已运行')
})
