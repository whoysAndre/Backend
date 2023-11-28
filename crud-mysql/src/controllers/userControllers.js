/*----Import connection----*/
const connection = require('../connection.js');

/*----ROUTER Views----*/
const getUsers = (req,res)=>{
  const sql = 'select * from users'//->Para seleccionar todos los campos de la tabla users
  connection.query(sql,(err,result)=>{
    if(err){
      console.log('Ups... Hubo un error');
    }else{
      res.render('users',{
        users: result
      });
    }
  })
};
const getCreateUser = (req,res)=>{
  res.render('create-user');
};
const getUpdateUser = (req,res)=>{
  const param = req.params.id;
  const sql = `select * from users where id = ${param}`
  connection.query(sql,(err,result)=>{
    if(err){
      console.log('Ups... Hubo un error');
    }else{
      res.render('update-user',{
        users: result
      });
    }    
  }); 
};
const getDeleteUser = (req,res)=>{
  const param = req.params.id;
  const sql = `select * from users where id = ${param}`
  connection.query(sql,(err,result)=>{
    if(err){
      console.log('Ups... Hubo un error');
    }else{
      res.render('delete-user',{
        users: result
      });
    }    
  }); 
};

/*----CRUD ROUTES---- */
const createUser = (req,res)=>{
  const sql = 'insert into users SET ?';
  const data = req.body;
  connection.query(sql,data,(err,result)=>{
    if(err){
      console.log('Hubo un error');
    }else{
      res.render('create-user',{
        users:result
      })
    };
  })
};
const updateUser = (req,res)=>{
  const param = req.params.id;
  const sql = `update users SET name='${req.body.name}',age=${req.body.age}, id = ${param}` //->Para actualizar datos
  connection.query(sql,(err,resul)=>{
    if(err){
      console.log('Hubo un error');
    }else{
      res.redirect('/users/all');
    };
  });
};
const deleteUser = (req,res)=>{
  const param = req.params.id;
  const sql = `delete from users where id = ${param}` //->Para Borrar datos
  connection.query(sql,(err,resul)=>{
    if(err){
      console.log('Hubo un error');
    }else{
      res.redirect('/users/all');
    };
  });
};

module.exports = {
  getUsers,
  getCreateUser,
  getUpdateUser,
  getDeleteUser,
  createUser,
  updateUser,
  deleteUser
};

