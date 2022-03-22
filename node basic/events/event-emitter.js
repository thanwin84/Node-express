const EventEmitter = require('events');
// creating instance of EVentEmitter
const emitter = new EventEmitter();

// register a listener
emitter.on('messageLogged', ()=>{
    console.log("Listener called");
})

// raise an event
emitter.emit('messageLogged')
