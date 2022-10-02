var Array2 = require('./Array')

var arr = new Array2()

arr.push(1);
arr.push(2);
arr.push(3);

var current = arr.find(function (item) {
    return item>1 && item<3
})

console.log(current)