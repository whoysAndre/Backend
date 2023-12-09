/*----Imports----*/
const express = require('express');
const http = require('node:http');
const socketio = require('socket.io');
require('dotenv/config');
const cors = require('cors');
const path = require('node:path');

/*----Instancing express----*/
const app = express();


const server = http.createServer(app);
const io = socketio(server);

/*----Middlewares----*/
app.use(cors());

/*-----Static File----*/
app.use(express.static(path.join(__dirname,'public')));

/*----Sockets----*/
io.on('connection',(socket)=>{

  //Para que el cliente se desconecte
  socket.on('disconnect',()=>{
    console.log('cliente desconectado');
  });

  //Recibir el mensaje
  socket.on('enviar-msg',(payload)=>{
    console.log('Se recibio el mensaje del cliente');
    //Para enviar datos al cliente
    socket.broadcast.emit('enviar-msg',payload);
  });
});


/*----Server----*/
server.listen(process.env.PORT);