var events2 = require('./events')

var eventEmitter = new events2.EventEmitter();

eventEmitter.on('event1',function () {
    console.log('event1')
})

eventEmitter.on('event2',function () {
    console.log('event2')
})

eventEmitter.emit('event1');// 触发事件