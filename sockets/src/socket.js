module.exports = (io)=>{
  /*----Luego de recibir los datos del cliente creamos un array para almacenar los mensajes----*/
  let msg = [];
  
  io.on('connection',(socket)=>{//->En el parametro va el socket y el on es el evento a escuchar
    //Connection para saber si un usuario se conecta
    console.log('Un usuario se ha conectado');

    /*Este codigo va despues de la codificacion de la linea 20 */
    io.emit('message',msg);//->Para obtener los mensajes cuando un nuevo usuario se conecte al servidor

    socket.broadcast.emit('new_user','Se ha conectado un user nuevo') //->El broadcast sirve para detectar si un usuario nuevo se a conectado

    /*Por ultimo recibimos ese evento*/
    socket.on('writing',(username)=>{
      socket.broadcast.emit('writing',username); 
    });//->Con este enviamos el a todos los usuarios clientes menos al que a enviado el mensaje
    
    socket.on('message',(data)=>{ //->Aqui recibimos los datos con el message que pusimos en el emit y la data
      msg.push(data);
      /*Emitimos un evento desde el servidor hacia los clientes*/
      io.emit('message',msg);//->Ese message es el nombre del evento puede ser cualquiera
    });
  });
};