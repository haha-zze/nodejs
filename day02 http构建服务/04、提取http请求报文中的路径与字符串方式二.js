const http = require('http')
const server = http.createServer((req, res) => {

    // fixme 如果需要得到下面的参数 需要在浏览器地址栏输入 http://127.0.0.1:9000/search?num=1&name=zs


    // 方式二 可以借助new url来获取请求路径和参数
    let url = new URL(req.url,'http://127.0.0.1')  // 后面这个协议和域名。端口可以随便写 但是不能不要 不要的话new URL解析会报错


    console.log(url)
   //URL {
    //   href: 'http://127.0.0.1/search?num=1&name=zs',
    //   origin: 'http://127.0.0.1',
    //   protocol: 'http:',
    //   username: '',
    //   password: '',
    //   host: '127.0.0.1',
    //   hostname: '127.0.0.1',
    //   port: '',
    //   pathname: '/search',
    //   search: '?num=1&name=zs',
    //   searchParams: URLSearchParams { 'num' => '1', 'name' => 'zs' },
    //   hash: ''
    // }


    // todo 获取路径
    console.log(url.pathname)

    // todo 获取查询参数
    // fixme 注意 这个地方并不完全像是js一样可以直接通过.去取 在获取参数的时候需要通过一个get函数去取
    console.log(url.searchParams.get('num'))  // 1
    console.log(url.searchParams.get('name')) // zs
    res.end('hello node')
})

server.listen(9000, () => {
    console.log('9000端口号的服务运行了')
})
