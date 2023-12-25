const fs = require('fs')

/// todo 练习要求：要求制作一个四行四列的表格 并且隔行变色 并且点击变色

// fixme 实现思路就是新建一个test1.html文件 在文件中绘制表格并实现变色逻辑 最后用node中的fs模块去读取test1.html文件中的内容  最后将读取到内容返回给浏览器

const http = require('http')

const server = http.createServer((req, res) => {

    fs.readFile(__dirname + '/test1.html', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        // fixme 读取的内容是buffer文件 但是end方法可以直接将buffer文件转化为字符串 当然如果转化完了之后再给end浏览器也是可以正常解析的
        console.log(data)

        // fixme 浏览器可以正常解析
        // res.end(data.toString())
        // fixme 直接将buffer文件给end  浏览器也是可以正常解析的
        res.end(data)
    })
})

server.listen('9000', () => {
    console.log("服务运行在9000的端口,监听中...")
})
