const express = require('express')
const app = express()
const path = require('path')

// fixme 步驟一 导入ejs
const ejs = require('ejs')

// fixme 步骤二 设置模板引擎 因为模板引擎有很多种 ejs只是其中一种 除了ejs 还有pug twing
app.set('view engine', 'ejs')

// fixme 步骤三 设置模板引擎文件存放位置 模板文件：具有模板语法的文件
app.set('views',path.resolve(__dirname, './views'))

// fixme 步骤四 创建路由
app.get('/home',(req, res) => {
    let title = '我在express中使用ejs啦'
    // fixme 步骤五 使用render响应 render('模板文件名','数据')
    res.render('home',{title})
})

app.listen(80)



