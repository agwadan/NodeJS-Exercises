const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter{}

//Initialize object
const myEmitter1 = new MyEmitter();

//Event Listener
myEmitter1.on('event', () => console.log('Event fired'));

myEmitter1.emit('event');