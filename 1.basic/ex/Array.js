function Array2() {

    this.source=[];

    this.push=function (item) {
        this.source.push(item);
    }

    this.find = function (callback) { // 回调

        var target = null;

        for(var i=0;i<this.source.length;i++){

            if(callback(this.source[i])){
                target= this.source[i];
                break;
            }
        }
        return target;
    }
}

module.exports= Array2

