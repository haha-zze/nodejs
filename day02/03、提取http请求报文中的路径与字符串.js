const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {

    // fixme 如果需要得到下面的参数 需要在浏览器地址栏输入 http://127.0.0.1:9000/search?num=1&name=zs

    // console.log(req.url)  //search?num=1&name=zs

    // todo 使用node内置模块url来解析 req.url
    console.log(url.parse(req.url, true))

    let params = url.parse(req.url, true)
    // todo 提取路径
    console.log(params.pathname)  // /search

    // todo 提取查询字符串
    console.log(params.query.num)  // 1
    console.log(params.query.name) // zs

    res.end('hello node')
})

server.listen(9000, () => {
    console.log('9000端口号的服务运行了')
})
