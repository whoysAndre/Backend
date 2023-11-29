/*----Imports----*/
const express = require('express');
const path = require('node:path');
const socketio = require('socket.io');
const http = require('node:http');

/*----Instancing---- */
const app = express();



/*----Socket Config----*/
const server = http.createServer(app)
const io = socketio(server);
require('./socket.js')(io);

/*----Static File---- */
app.use(express.static(path.join(__dirname,'public')));

const port = 3000;
server.listen(port); 