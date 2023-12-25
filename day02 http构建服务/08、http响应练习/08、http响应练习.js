// todo 先把外层的test1.html文件读取进来 然后把css和js文件拆分出去

const fs = require('fs')
//
// const rs = fs.createReadStream('../test1.html')
//
// const ws = fs.createWriteStream('./index.html')
//
// rs.on('data',chunk => {
//     ws.write(chunk)
// })
//
//
// rs.on('end',()=>{
//     console.log('读取结束了')
// })

const path = require('path')
const http = require('http')

const port = 9000

const server = http.createServer((req, res) => {
    // fixme 当我们的index.html文件中的css和js文件时外链的形式引入的 这个时候我们当前这种写法会有问题 因为只用进入这个服务返回的都是index.html文件的内容 所以需要改一下
    // fs.readFile('./index.html',(err,data)=>{
    //     if(err) {
    //         console.log(err)
    //         return
    //     }
    //     console.log(data,"data")
    //     res.setHeader('content-type','text/html;charset=utf-8')
    //     res.write(data)
    //     res.end('哈哈哈哈')
    // })

    const url = new URL(req.url, 'http:127.0.0.1')
    const pathName = url.pathname
    // let filePath =  __dirname + pathName
    // console.log(filePath, "filePath")
    // fs.readFile(filePath, (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     console.log(data)
    //     res.end(data)
    // })

    if (pathName === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.end(data)
        })
    } else if (pathName === '/index.css') {
        fs.readFile('./index.css', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(data, "data")
            res.end(data)
        })
    } else if (pathName === '/index.js') {
        fs.readFile('./index.js', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(data, "data")
            res.end(data)
        })
    } else {
        res.statusCode = 400
        res.end('not-found')
    }
    console.log(url)
})

server.listen(port, () => {
    console.log('本地服务启动了 运行在9000的端口上 监听中...')
})
