/**
 * 异步操作
 *    1.回调函数：函数作为参数使用
 */
function boo(name) {
    console.log("hello:"+name);
}

// 2 name = 'Martin',callback=function(name)
function foo(name,callback){
    //3
    callback(name)
}

foo('Martin',function (name) { //1
    console.log("hello:"+name)//4
})

/**
 *   2.异步
 *          应对 耗时操作
 *          无阻塞
 *          跳步执行
 */
console.log("step1");
setTimeout(function () {
    console.log("step2")
},2000)
console.log("step3")
