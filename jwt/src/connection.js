/*----Import----*/
const mongoose = require('mongoose');
const {mydatabase} = require('./config.js');

/*-----Create connection database */
const {host,port,database} = mydatabase;
const connection = mongoose.connect(`mongodb://${host}:${port}/${database}`)
  .then((db)=>{
    console.log('Conexion exitosa');
  }).catch((e)=>{
    console.log('Hubo un erro' + e);
  })


module.exports = connection;