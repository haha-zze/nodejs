# 此项目是一个往qq邮箱发送邮件的脚本

# 执行脚本需要触发index.js中的post请求 格式如下

POST http://localhost:3000/send/mail
Content-Type: application/json
Content-Length: 104
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.5.14 (Java/17.0.9)
Accept-Encoding: br,deflate,gzip,x-gzip

{
"to": "625305127@qq.com",
"subject": "标题",
"text": "我想你了，你还好吗Rong"
}

# 可直接复制文本在webstorm内置的http中创建post请求发送即可
