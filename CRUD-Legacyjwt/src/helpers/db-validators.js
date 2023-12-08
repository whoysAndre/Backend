
import Role from '../model/rol.model.js';
import Users from '../model/user.model.js';

const isRolValid = async(rol='')=>{
  const existeRol = await Role.findOne({rol});
  if(!existeRol){
    throw new Error('El rol no es registrado en la base de datos');
  }
};

const isEmailValid = async(email = '')=>{
  const existEmail = await Users.findOne({ email });
  if (existEmail) {
    throw new Error('El email ya esta registrado');
  }
}

export {
  isRolValid,
  isEmailValid
}



