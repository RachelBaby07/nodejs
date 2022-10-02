function foo() {
    console.log("hello node!");// 控制台输出
}

/**
 *  导出方式
 */
// module.exports = foo;
// module.exports.foo = foo;
module.exports={
    foo
}