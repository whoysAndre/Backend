const socket = io();
/*----Añadiendo eventos----- */
const userName = document.getElementById('user-name');
const writeMsg = document.getElementById('write-msg');

const allMsg = document.getElementById('all-msg');

const newUser = document.getElementById('new-user');

const writing = document.getElementById('writing');

writeMsg.addEventListener('keyup',(event)=>{//->El evento keyup sirver para enviar algo luego de hacer enter
  if(event.code=='Enter'){//->Activamos el evento al dar enter
    if(userName.value!=''&&writeMsg.value!=''){//->Verificaremos si al dar enter los campos estan vacios
      //Enviamos datos al servidor usando socket para eso emitiremos un evento emit
      socket.emit('message',{   //->Se recibe 2 parametros 1°nombre del evento | 2°datos 
        userName: userName.value,
        message: writeMsg.value.slice(0,-1)//->Para borrar algunos caracteres
      });
      /*----Una vez emitido iremos a nuestro servidor */
      writeMsg.value = '';//->Para vaciar el textarea luego de enviar el mensaje
      
    }else{
      console.log('Ingrese los campos completos');
    }
  }
})

/*Por ultimo Para ver un apartado que dice que estas escribiendo... */
writeMsg.addEventListener('keydown',(event)=>{
  if(userName.value!=''){
    socket.emit('writing',userName.value);
  } 
})



/*---------------------------------------------------------- */



/* Aqui lo recibimo con el on que es para escuchar un evento */
socket.on('message',(dataMsg)=>{
  //Mostrando los mensajes
  let content = "";
  dataMsg.forEach(msg => {
    content += `
      <div>
        ${msg.userName}:
        ${msg.message}
      </div>
    ` 
  });

  allMsg.innerHTML = content;
})

/*Aqui detectamos el evento bradcast*/
socket.on('new_user',(msg)=>{
  newUser.innerHTML = msg;

  setTimeout(()=>{
    newUser.innerHTML = '';
  },3000)
})

/*ULTIMO PASO AHORA SI JAJA */
socket.on('writing',(username)=>{
  writing.innerHTML = username + "Esta escribiendo";
  setTimeout(()=>{
    writing.innerHTML = '';
  },3000)
})
