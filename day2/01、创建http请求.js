const http = require('http')

// 设置端口号
const port = 80

//todo 创建请求
const server = http.createServer((request,response)=>{
    // todo 设置响应体 并且结束请求
    // response.end('hello world')

    // todo 获取请求的方法
    // console.log(request.method)

    // todo 获取请求的url  // 只包含路径和查询参数
    // console.log(request.url)

    // todo 获取请求的头
    // console.log(request.headers)

    // todo 获取请求的版本号
    // console.log(request.httpVersion)

    // todo 如果相应内容为中文会乱码  需要设置响应头
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('你好')
})

// 监听请求9000的端口号
server.listen(port,()=>{
    console.log(port + '的服务端口已经启动')


})

