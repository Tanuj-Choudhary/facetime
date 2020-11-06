const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const username = require('username-generator');

const app = express();
app.use(express.static(`${__dirname}/client/build`));

const server = http.createServer(app);
const io = socketio(server);

const users = {};

io.on('connection', (socket) => {
  //generate username against a socket connection and store it
  const userid = username.generateUsername('-');
  if (!users[userid]) {
    users[userid] = socket.id;
  }
  //send back username
  socket.emit('yourID', userid);
  io.sockets.emit('allUsers', users);

  socket.on('disconnect', () => {
    delete users[userid];
  });

  socket.on('callUser', (data) => {
    io.to(users[data.userToCall]).emit('hey', {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on('acceptCall', (data) => {
    io.to(users[data.to]).emit('callAccepted', data.signal);
  });

  socket.on('close', (data) => {
    io.to(users[data.to]).emit('close');
  });

  socket.on('rejected', (data) => {
    io.to(users[data.to]).emit('rejected');
  });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
