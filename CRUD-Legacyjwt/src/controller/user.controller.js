import Users from "../model/user.model.js";
import bcrypt from "bcrypt";


const getUsers = async (req, res) => {
  
  const queries = req.query;
  
  try {
    const userAll = await Users.find().limit(parseInt(queries.limit));
    res.send(userAll);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {

  const { name, email, password, rol, google, img, state } = req.body;
  const newUser = new Users({
    name,
    email,
    password,
    rol,
    google,
    img,
    state
  })

  //Validar email
  
  //Encriptar contraseña
  newUser.password = bcrypt.hashSync(password, 10);

  await newUser.save();
  res.json(newUser);
};

const updateUser = async(req, res) => {
  const param = req.params.id;
  const data = req.body;
  try {
    const userExist = await Users.findOne({_id:param});
    if(userExist){
      try {
        await Users.findByIdAndUpdate({_id:param},data);
        res.send('Usuario modificado');
      } catch (error) {
        console.log(error)
      }
    }else{
      res.send('Usuario no encontrado');
    }
  } catch (error) {
    console.log(error)
  }

};

const deleteUser = async(req, res) => {
  const param = req.params.id;

  try {
    const userExist = await Users.findOne({_id:param});
    if(userExist){
      try {
        await Users.deleteOne({_id:param});
        res.send('User deleted');
      } catch (error) {
        console.log(error)
      }
    }else{
      res.send('Usuario no encontrado');
    }
  } catch (error) {
    console.log(error)
  }
};

export {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};