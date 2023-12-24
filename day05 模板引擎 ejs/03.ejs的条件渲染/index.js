const ejs = require('ejs')
const fs = require('fs')
// fixme 需求:判断isLogin的值是否为true  如果是true 那么展示<span>欢迎回来</span> 否则展示 <button>登录</button>


const isLogin = true

// todo 原生js写法

// if(isLogin) {
//     console.log('欢迎回来')
// } else {
//     console.log('<button>登录</button>')
// }

const html = fs.readFileSync(__dirname + '/index.html').toString()

// todo ejs 写法

const res = ejs.render(html,{isLogin})

console.log(res)
