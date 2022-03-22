const eventEmitter = require('events');

const customEmitter = new eventEmitter();
customEmitter.on('response', (name, id)=>{
    console.log(`got data: ${name} ${id}`)
})
customEmitter.on('response', ()=>{
    console.log('another logic')
})
customEmitter.emit('response', 'win', 35);
