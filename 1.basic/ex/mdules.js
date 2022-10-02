var boo='90';
var name='m';

var foo1=function () {
    console.log('fool')
}
var foo2=function () {
    foo1();
}

module.exports={
    foo2,
    boo
}