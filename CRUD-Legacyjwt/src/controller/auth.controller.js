import Users from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../helpers/generate-jwt.js";


const login = async(req,res)=>{
  
  const { email,password } = req.body;

  try {
    
    //Verificar si el email existe
    const verifyData = await Users.findOne({email});
    if(verifyData){
      if(bcrypt.compareSync(password,verifyData.password)){
        
        const token = await generateToken( verifyData.id );
        res.send(token);

      }else{
        res.send('Contraseña incorrecta');
      }

    }else{
      res.send('El usuario no existe');
    }

  } catch (error) {
    console.log(error);
  }
};

const register = (req,res)=>{
  res.send('Register');
}


export {
  register,
  login
}