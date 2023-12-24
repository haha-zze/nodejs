const express = require('express')
const router = express.Router()
const path = require('path')
// fixme 引入formidable包 这个包可以获取图片上传的信息
const {formidable} = require('formidable')

// fixme 创建请求一 获取文件上传的表单 在views文件夹下新建一个form的ejs文件并响应给客户端
router.get('/',(req, res) => {
    // res.send('文件上传')
    res.render('form')
})

// fixme 创建请求二 获取客户端文件上传的数据
router.post('/upload',(req, res,next) => {
    // todo  配置完这些之后客户端上传的文件就会直接保存到public/images文件夹下了
    const form = formidable({
        // fixme 对上传的文件进行一些配置
        multiples:true,
        // fixme 设置文件上传的保存目录
        uploadDir:path.resolve(__dirname,'../public/images'),
        // fixme 保持文件后缀
        keepExtensions:true
    });
    let url = ''
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        // fixme fields 获取的是一版参数  files获取的是文件上传参数
        // console.log(fields, files)
        console.log(files.avater[0].newFilename)
        // todo 我们可以通过files对象的newFilename字段获取到客户端上传的图片的名称 真是开发情况下 我们一般是将这个图片保存在我们静态资源服务器下 并且将地址保存到服务器中 地址我们可以通过 http://127.0.0.1/images/ + 图片的名称及后缀 我们可以通过这个地址访问到图片 但是一般真是开发中我们只保存 /images/ + 图片的名称及后缀 因为我们的协议、域名、端口是可能会更换的 如果我们保存到是完整路径那么到时候代码也需要更改
        let url = files.avater[0].newFilename
        console.log(url,"url")
        // res.json({ fields, files });
        res.send(url)
    });
})

module.exports = router
