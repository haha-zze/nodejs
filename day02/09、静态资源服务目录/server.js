const http = require('http')
const fs = require("fs");
const path = require('path')
const server = http.createServer((req, res) => {
    // fixme 获取请求进来的url信息
    let params = new URL(req.url, 'http://127.0.0.1')

    // fixme 获取请求的路径
    let pathName = params.pathname

    // fixme 将当前的路径拼接上 静态资源服务器目录的 page  再拼接上请求的路径
    let filePath = __dirname + '/page' + pathName


    console.log(pathName,filePath, "url")

    // fixme 获取请求文件的后缀名
    console.log(path.extname(filePath).slice(1),"文件路径")

    // fixme  这个地方不能用同步api  因为favicon的请求进来会报错 我们本地并没有favicon图标 所以这个地方需要异步的读取 有错误就将错误打印出来
    fs.readFile(filePath, (err, data) => {
        if(req.method !== 'GET') {
            res.statusCode = 405
            res.end('method not allowed')
        }
        if (err) {
            console.log(err)
            // 设置字符集
            res.setHeader('content-type','text/html;charset=utf-8')
            console.log(err)
            switch (err.code) {
                case 'ENOENT':
                    // 没有找到改页面
                    res.statusCode = 404
                    res.end('<h1>404 not fount</h1>')
                case 'EPERM':
                    // 没有权限访问
                    res.statusCode =  403
                    res.end('<h1>403 Forbidden</h1>')
                default:
                    res.statusCode = 500
                    res.end('<h1>服务器内部错误</h1>')
            }
            return
        }
        // fixme 如果这里返回的有中文 那么中文会乱码 获取文件路径后缀然后设置不同的响应头（我这里没有列枚举所以没有做 ，后面可以通过工具解决），但是index.html文件并没有乱码 因为index.html文件中的meta标签中已经设置了charset=utf-8 所以不会乱码 但是如果响应头中设置了制定的响应头 那么响应头的优先级会高于html文件中设置的meta标签
        res.end(data)
    })
})

server.listen('9000', () => {
    console.log("运行了服务")
})
