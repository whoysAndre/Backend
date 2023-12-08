import jwt from "jsonwebtoken";

const validateToken = (req,res,next)=>{

  const token = req.header('x-token');

  if(!token){
    return res.status(401).send('No hay token en la petición');
  }

  try {
    jwt.verify(token,process.env.SECRETEPRIVATEKEY);
    next();
    
  } catch (error) {
    console.log(error);
    res.send('Token no es valido');
  };
  
};

export default validateToken