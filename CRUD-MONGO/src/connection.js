const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/dbstudent')
  .then((db)=>{
    console.log('Conexion existosa');
  }).catch((err)=>{
    console.log('Hubo un error al conectar con la base de datos');
  });

module.exports = connection;