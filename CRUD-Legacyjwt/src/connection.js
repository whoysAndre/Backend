import mongoose from "mongoose";

const connection = mongoose.connect('mongodb://localhost:27017/dbcafe')
  .then((db)=>{
    console.log('Conexion exitosa');
  }).catch((err)=>{
    console.log('Fallo en la conexion' + err);
  });

export default connection;