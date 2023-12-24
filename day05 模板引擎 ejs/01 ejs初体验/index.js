// fixme ejs 就是可以将模板和js抽离的一个模板引擎 不然在node中 如果我们需要将node的变量在html中渲染 只能将html的代码写在nodejs的代码当中 抽离出去引入加载是不行的

// fixme 第一步 npm i ejs 我们在这个文件夹下载依赖 因为当前目录并没有package.json文件 npm会自动向外层寻找 找到上一级有 就会在上一级下载 如果一直向上都没有 那么就会报错

// fixme 第二步 导入ejs
const ejs = require('ejs')
const express = require('express')

const app = express()
const fs = require('fs')

// fixme 读取html文件的内容
const template = fs.readFileSync(__dirname + '/index.html').toString()

// todo 定义变量
const str = '今天天气还不错呢'
const hobby = '我的爱好是敲代码'

// fixme 第三步 使用ejs渲染
const result = ejs.render(template, {wether: str,hobby})
app.get('/', (req, res) => {
    res.send(result)
})

app.listen(80, () => {
    console.log('服务已启动')
})
console.log(result)
