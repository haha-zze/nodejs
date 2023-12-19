
function play() {
     console.log('我会玩英雄联盟')
}

function study() {
      console.log('我热爱学习')
}

// fixme 使用exports暴露数据 如果暴露的是简单数据类型的数据 那么其实别的模块引入的会是一个空对象 因为他们之间的关系就是下面的表达式
// fixme 不管是用exports暴露的还是module.exports暴露的 使用require引入的都是module.export暴露出去的变量
// fixme exports只是一种简写方式 exports暴露复杂数据类型比如说对象或者函数 因为是复杂数据类型 他们相当于是给最后nodule.exports暴露出去的对象追加了一个引用
// exports = module.exports = {}

// 暴露单个
// module.exports = play

// 暴露多个
// module.exports = {
//     play,
//     study
// }


// fixme 这种简单数据暴露方式并不会给最后module.exports暴露出去的对象添加任何东西 所以最后打印结果依然是空对象
// exports = '333'
// exports.a = '222'
// const hobby = require('./test')
// console.log(hobby)  // {}

// exports可以使用多次 但是module.exports只能使用一次 下面的这种暴露方式等于上面的module.exports方式
exports.study = study
exports.play = play

