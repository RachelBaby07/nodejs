var fs =require('fs');

/***同步和异步的区别（node推荐异步）
 *
 *
 * **/

function select(callback){
    fs.readFile('txt/input.txt',function (err,data) {//异步读取
        // console.log(data.toString());
        callback(data.toString());  // 异步获取返回值，回调函数
    })
}

function selectSync() { // 同步读取，自带返回值
    var txt=fs.readFileSync('txt/input1.txt');
    return txt.toString();
}

//console.log(txt.toString());

module.exports={
    selectSync,
    select
}
