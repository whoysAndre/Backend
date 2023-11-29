const verifyToken = (req,res,next)=>{  
  const authorizationHeader = req.headers['authorization'];
  if(authorizationHeader !== undefined){
    const token = authorizationHeader.split(" ")[1];
    req.token = token;
    next();
  }else{
    console.log('No ingreso el token')
  }
  
}


module.exports = verifyToken;