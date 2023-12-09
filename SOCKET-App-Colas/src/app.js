const express = require('express');
const path = require('node:http');
const http = require('node:http');
const socketio = require('socket.io');
require('dotenv/config');

//Servers
const app = express();
const server = http.createServer(app);

const io = socketio(server);


//Sockets
io.on('connection',()=>{
  console.log('Conectado');
})




server.listen(process.env.PORT);




