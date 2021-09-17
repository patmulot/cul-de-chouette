# 1 créer package.json
y placer :
```
{
  "name": "socket-chat-example",
  "version": "0.0.1",
  "description": "my first socket.io app",
  "dependencies": {}
}
```

# 2 install npm et express
```
npm install
```
et
```
npm install express@4
```

# 3 créer un fichier index.js
y placer :
```js
const express = require('express');
const app = express();
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

```

# 4 run node
```
node index.js
```