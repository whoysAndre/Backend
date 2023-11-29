const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');
const User = require('../models/userModel.js');


const getAdmin = (req,res)=>{
  jwt.verify(req.token, 'secret-key',(err,userData)=>{
    if(err){
      res.send('Ha ocurrido un error' + err);
    }else{
      res.json({
        menssage: "Datos correctos puede ingresar",
        userData: userData
      })
    }
  })
};

const login = async(req,res)=>{
  try{
    const result = await User.findOne({email:req.body.email});//->Para seleccionar el email de un documento
    if(result){
      if(bcrypt.compareSync(req.body.password,result.password)){//->Comparar las contraseñas tanto como el servidor y la db
        /*----GENERAR TOKEN----*/
        jwt.sign({user:result}, 'secret-key',(err,token)=>{
          res.send({token:token});
        })
      }else{
        res.send('Contraseña incorrecta');
      }
    }else{
      res.send('El usuario no existe');
    }
  }catch(err){
    console.log(err);
  }
};

const register = async(req,res)=>{
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password,10) //->Para encriptar contraseña
  })
  try{
    await user.save();
    res.send('Registrado');
  }catch(err){
    console.log(err);
  }
};

module.exports ={
  getAdmin,
  login,
  register
}