var fs =require('./7.readFile');

// 同步输出
var result = fs.selectSync();
console.log(result)

// 异步读取
fs.select(function (content) {
    console.log("content: "+content)
})