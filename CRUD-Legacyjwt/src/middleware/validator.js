import { validationResult } from "express-validator";

const validate = (req,res,next)=>{
  const error = validationResult(req);
  if(!error.isEmpty()){
    return res.json(error);
  };

  next();
}

export default validate;