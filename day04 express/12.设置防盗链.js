// fixme 防盗链比较常见的用于保护网站资源 一般只会允许本网站域名访问 比如说图片 某些网站上的 图片只允许本网站访问 如果直接赋值地址拿到html中也是访问不到的 是因为网站开启了防盗链 防盗链的关键就是通过请求头中的referer来判断 referer其实就是请求的时候的协议、域名和端口

const express = require('express')

const app = express()

// fixme 测试需要用到两台不用的域名才能测试 我们可以借助127.0.0.1 和 localhost来测试  允许publick文件夹下的index.html中的img标签在127.0.0.1的情况下可以访问 对不是127.0.0.1的域名下的资源都开启防盗链
// fixme 127.0.0.1 和 localhost 都是直接访问public文件夹下的index.html 不开启防盗链的情况下 这两个图片都可以访问到
// fixme 注册全局中间件

app.use((req, res, next) => {
    console.log(req.get('referer')) // 如果是通过127.0.0.1访问 打印的就是http://127.0.0.1/  如果是通过localhost访问打印的就是http://localhost/
    let referer = req.get('referer')
    if (referer) { // 这个地方加判断的原因不是很清楚 可以明确知道的是请求index.html的请求中请求头是没有referer的  可能是只有请求图片的时候请求头中会携带referer
        let url = new URL(req.get('referer'))

        console.log(url)

        let hostName = url.hostname
        console.log(hostName)
        if (hostName !== '127.0.0.1') {
            // fixme 这里是可以支持链式调用的
            res.status(404).send('<h1>404 not found</h1>')
        }
    }
    next()
})

// 创建一个静态资源服务器
app.use(express.static(__dirname + '/public'))

app.listen('80', () => {
    console.log('服务已开启')
})
