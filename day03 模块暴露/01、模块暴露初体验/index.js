
const hobby = require('./test')

hobby.play()
hobby.study()

// fixme require导入注意事项
// fixme 1、对于自己创建的文件 导入路径写相对路径，切不能省略./和../
// fixme 2、js和json文件导入时可以不用写后缀，c/c++编写的node扩展文件也可以不用写后缀
// fixme 3、如果导入其他类型的文件，比如说text/或者自定义abc什么的，会以js文件进行处理
// fixme 4、如果导入的路径是个文件夹，则会首先检测改文件夹下package.json文件中的main属性对应的文件，如果存在则导入，反之如果文件不存在会报错。如果main属性不存在或者package.json文件不存在，则会尝试导入文件夹下的index.js和index.json,如果还是没找到，就会报错！
// fixme 5、导入nodejs内置模块时，直接require模块的名字即可

// fixme 示例:(示例代码是假设执行了npm i uniq)命令当前js文件夹和nodulemodules文件夹同目录的情况下
// todo const require = require('uniq') === require('./nodemodules/uniq') === uniq这个依赖包里面的package.json中的main属性对应的文件
