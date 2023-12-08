/*----Imports----*/
import { Router } from 'express';
import {getUsers,createUser,updateUser,deleteUser} from '../controller/user.controller.js';
import {check} from "express-validator";
import validate from "../middleware/validator.js";
import { isRolValid, isEmailValid } from '../helpers/db-validators.js';
import validateToken from '../middleware/validate-token.js';

/*----Instancing express router----*/
const router = Router();

/*-----Routing-----*/
router.get('/all',validateToken,getUsers);
router.post('/create',[
  check('name','El name no tiene que estar vacio').not().isEmpty(),
  check('email','Email no es valido').isEmail(),
  check('email').custom(isEmailValid),
  check('password','Tiene que ser mayor a 6 caracteres').isLength({min:6}),
  //Verificando los roles
  check('rol').custom(isRolValid),
  validate
],createUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

export default router;