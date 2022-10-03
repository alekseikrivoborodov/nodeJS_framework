// How work with events
// Ulbi says that very powerfull instruments with lot of solutions for your problem

const Emitter = require('events')

const emitter = new Emitter()

emitter.on('message', (data) => {
    console.log(`Message has putted ${data}`)
})

emitter.on('error', () => {
    console.log(`Error has putted`)
})

const MESSAGE = process.env.message || "message"

if (MESSAGE) {
    emitter.emit('message', MESSAGE)
}
else {
    emitter.emit('error')
}