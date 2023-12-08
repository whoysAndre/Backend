import jwt from "jsonwebtoken"

const generateToken = (uid)=>{

  return new Promise((resolve,reject)=>{

    const payload = { uid };
    jwt.sign(payload,process.env.SECRETEPRIVATEKEY,{expiresIn:'4h'},(err,token)=>{
      if(err){
        reject(err);
      }else{
        resolve(token);
      }
    });

  });

};

export default generateToken;

