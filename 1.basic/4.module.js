// Node,js提供了exports和require两个对象，
// exports是模块公开的接口
// require用于从外部获取一个模块的接口，即所获取模块的exports对象
var foo = require('./1.hello'); //导入函数 相当于 import
var foo2 =require('./ex/m2')  // 导入对象
var foo3 =require('./5.buffer')

// foo
foo.foo();

var testFoo = new foo2('Martin');
testFoo.sayHi();
testFoo.walk();

console.log(testFoo.name)

foo3.testEncode();
foo3.testCreate();
foo3.testWrite();
foo3.testRead();