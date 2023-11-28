/*----Import Mysql----*/
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'db_users'
});

connection.connect((err,conn)=>{
  if(err){
    console.log('Hubo un error al conectar con la base de datos');
  }else{
    return conn;
  }
});

module.exports = connection;