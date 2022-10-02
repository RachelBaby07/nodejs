function foo2(name) { // 相当于java的class定义
    this.name=name;

    this.sayHi=function () {
        console.log("hi"+this.name);
    }

    this.walk=function () {
        console.log(this.name+"is walking.")
    }
}

module.exports =foo2 ; // 导出对象
