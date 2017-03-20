// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

setTimeout(function() {
	console.log("1")
	setTimeout(function() {
		console.log("2")
		setTimeout(function() {
			console.log("3")
		}, 2000)
	}, 2000)
}, 1000)

eventEmitter.on('a', function() {
	setTimeout(function() {
		console.log("1")
		eventEmitter.emit('b');
	}, 1000)
});

eventEmitter.on('b', function() {
	setTimeout(function() {
		console.log("2")
		eventEmitter.emit('c');
	}, 2000)
});

eventEmitter.on('c', function() {
	setTimeout(function() {
		console.log("3")
	}, 2000)
});
eventEmitter.emit('a');