import { Router } from 'express';
import { register,login } from "../controller/auth.controller.js";
import { check } from 'express-validator';
import validate from '../middleware/validator.js';

/*----Instancing express router----*/
const router = Router();

/*-----Routing-----*/
router.post('/login',[
  check('email','El correo es obligatorio').isEmail(),
  check('password','El password es obligatorio').not().isEmpty(),
  validate
],login);
router.post('/register',register);


export default router;