const http = require('http')


const server = http.createServer((req, res) => {


    // todo 设置响应的状态码
    // res.statusCode = 404
    // res.statusCode = 200


    // 设置响应描述  一般不设置才用浏览器默认
    res.statusMessage = 'iloveyou'  // 200 iloveyou

    // todo 设置响应头
    // res.setHeader('my-header', 'test')

    // todo 设置重名响应头
    res.setHeader('test',['a','b','c'])  // 以数组的形式设置的就是重名响应头 响应头会战士会   Test: a  Test: b  Test: c

    // todo 设置响应体
    // fixme write和end都可以设置响应体  write可以设置多个 会追加的形式展示 end只能设置一次 并且代码运行到res.end表示代码不会服务结束 会断开连接 end后面的代码不会再执行
    res.write('write')
    res.write('write')
    res.write('write')
    res.write('write')
    res.write('write')

    res.end('hello node')


})

server.listen('9000', () => {
    console.log("服务已启动，端口运行在9000，监听....")
})
