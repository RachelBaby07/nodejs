var events = require('./ex/events')

//EventEmitter可以发送和接收事件，使用on来监听客户端的事件。
var eventEmitter = new events.EventEmitter();

/*events*/
eventEmitter.on('connect',function () { // 注册事件
    console.log('connect...')
})

eventEmitter.on('data',function () { // 注册事件
    console.log('data')
})

eventEmitter.on('update',function () { // 注册事件
    console.log('update')
})

eventEmitter.on('close',function (arg1,arg2) { // 注册事件
    console.log('close',arg1,arg2)
})

eventEmitter.on('user',function () { // 注册事件
    eventEmitter.emit('connect');// 触发事件
    eventEmitter.emit('data');// 触发事件
    eventEmitter.emit('update');// 触发事件
})

eventEmitter.emit('user');// 触发事件
eventEmitter.emit('close', 'arg1 参数', 'arg2 参数');

/**
 *  this.$emit('') 事件分发
 *  .$on
 */
