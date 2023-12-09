
/*----Selectors-----*/
const txtOnline = document.getElementById('txt-online');
const txtOffline = document.getElementById('txt-offline');
const txtMsg = document.getElementById('txt-msg');
const btnSend = document.getElementById('btn-send');



/*----Para conectar el cliente con el servidor-----*/
const socket = io();

/*----Mostrando mensajes de coneccion lado cliente----*/
socket.on('connect',()=>{
  console.log('Conectado al servidor');
  txtOffline.style.display = 'none';
  txtOnline.style.display = '';
});

socket.on('disconnect',()=>{
  console.log('Desconectado del servidor');
  txtOnline.style.display = 'none';
  txtOffline.style.display = '';

});

//Para recibir el mensaje del servidor
socket.on('enviar-msg',(payload)=>{
  console.log(payload);
});


/*----Events listeners----*/
btnSend.addEventListener('click',()=>{
  const msg = txtMsg.value;
  
  //Mandando la info al servidor
  socket.emit('enviar-msg',msg);

});
