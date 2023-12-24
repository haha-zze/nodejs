const http = require('http')

const server = http.createServer((Request, Response) => {
    // todo 1、声明变量 接收请求体
    let body = ''

    // todo 2、绑定data事件
    Request.on('data', chunk => {
        body += chunk  // chunk本身也是buffer文件 但是因为做加法拼接的时候内部会自动进行toString() 所以就不要再toString()了
    })

    // todo 绑定end事件
    Request.on('end', () => {
    // todo 因为我们之间刷新浏览器时get请求 而get请求是没有请求体的 所以需要打印请求的需要借助目录下的test.html文件 里面的表单发送一个post请求 请求指向的就是127.0.0.1 就会进入到当前这个请求
        console.log(body)  // username=111&password=111

        // 响应
        Response.end('hello http')
    })
})

server.listen('80', () => {
    console.log('80端口的服务已经启动')
})
