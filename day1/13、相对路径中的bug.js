const fs = require('fs')


//  todo 执行这个操作如果当前文件夹下没有index.html 会创建一个index.html文件并写入这样一段文本
//  fixme 但是这样会存在一个bug  这种通过命令行去运行文件创建出来的文件并不一定会是当前文件夹下创建 而是会创建在你执行命令的文件夹目录下  如果我现在的命令行工具不是在day1目录下 而是nodejs目录下 我可以通过
//  fixme  node .\day1\13、相对路径中的bug.js这个命令来执行当前的js文件 但是创建出来的index.html不会是在day1目录下 而是会在nodejs目录下

// fs.writeFileSync('./index.html','这是通过命令行相对路径创建并写入的文件内容')

// todo 绝对路径 解决这个问题的方式是通过__dirname  这个变量始终保存的是所在文件的所在目录的绝对路径
console.log(__dirname) // C:\Users\周志恩\Desktop\nodejs\day1

fs.writeFileSync(__dirname + '/index.html','这是通过命令行绝对路径创建并写入的文件内容')
