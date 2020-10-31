const express = require('express');
const http = require('http')
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('New WS connection');
})

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));