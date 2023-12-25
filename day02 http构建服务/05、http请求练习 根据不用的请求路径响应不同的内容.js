const http = require('http')

const server = http.createServer((req, res) => {

    let params = new URL(req.url,'http://127.0.0.1')

    // 获取请求的方法
    let { method } = req

    let md = 'get'

    // 获取请求的路径
    let path = params.pathname

    res.setHeader('content-type','text/html;charset=utf-8')

    if(method === ('get'.toUpperCase()) && path === '/login') {
        res.end("登录界面")
    } else if(method === ('get'.toUpperCase()) && path === '/reg') {
        res.end("注册界面")
    } else {
        // todo 如果不是这两个当中的 记得也要res.end 出去 比如说favicon的请求也会进到这个里面来 如果没有下面的res.end 那么这个其他的请求就会一直和服务端建立连接 页面就会处于转圈的状态
        res.end('没有找到')
    }




})


server.listen('9000',()=>{
    console.log('服务已开启，监听9000端口中')
})
