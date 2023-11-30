/*----Import-----*/
const User = require('../models/userModel.js');

const getUsers = async(req,res)=>{
  try {
    await User.find({});
  } catch (error) {
    console.log(error);
  }
};

const createUser = async(req,res)=>{
  const data = req.body;
  const user = new User({
    name: data.name,
    email: data.email,
    age: data.age
  });
  try {
    const result = await user.save();
    res.send('Usuario Creado');
  } catch (error) {
    console.log('Hubo un error');
  }
};  
const updateUser = async(req,res)=>{
  const param = req.params.name;
  const data = req.body;
  try {
    const result = await User.findOne({name:param})
    if(result){
      try {
        await User.findOneAndUpdate({name:param},data)
        res.send('Usuario modificado'); 
      } catch (error) {
        console.log(error);
      }
    }else{
      console.log('No se encontro usuario');
      res.send('Usuario no se encontro');
    }
  } catch (error) {
    console.log('hubo un error');
  }
};  
const deleteUser = async(req,res)=>{
  const param = req.params.name; 
  try {
    const result = await User.findOne({name:param})
    if(result){
      try {
        await User.deleteOne({name:param});
        res.send('Usuario eliminado');
      } catch (error) {
        console.log('hubo un error');
      }
    }else{
      console.log('No se encontro usuario');
    }
  } catch (error) {
    console.log('hubo un error');
  }
};  

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};