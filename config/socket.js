const socket = require('socket.io')
const server = require('./server')

const io = socket(server)

io.on('connection', client => {
    client.on('tweet', event);
});  

module.exports = io

// socket code
// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });
// });
// server.listen(3000);

// sneha code 

// const server = require('./server')
// const socket = require('socket.io')

// const io = socket(server)

// io.on('connection', socket => {
//     const id = socket.handshake.headers.referer.split('/')[4]
//     const agenda = socket.handshake.headers.referer.split('/')[3]
//     if(id && id.length === 24 && agenda == 'agendas') {
//         socket.join(`${id}`) 
//         socket.emit('message', 'hello')
//     }
// })

// module.exports = io