const express = require('express');
const app = express();

const path = require("path");
// console.log("/var/www/html/neo/my-projects/cul-de-chouette");
app.use(express.static(path.join("/var/www/html/neo/my-projects/cul-de-chouette/public")))

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/messenger.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});