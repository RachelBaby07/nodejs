function EventEmitter() { // 构造器

    this.events=[];

    this.on = function (eventName,eventFunc) { // 注册事件
        this.events.push({
            eventName:eventName,
            eventFunc:eventFunc
        })

        console.log('events: ')
        console.log(this.events)
    }

    this.emit = function (eventName) { // 触发事件
        this.events.find(function (func) {
            return func.eventName == eventName;
        }).eventFunc();
    }
}

module.exports={
    EventEmitter
}