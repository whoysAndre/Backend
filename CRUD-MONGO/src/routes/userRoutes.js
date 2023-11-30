/*----Imports----*/
const express = require('express');
const {getUsers,createUser,updateUser,deleteUser} = require('../controllers/userController.js');

/*----Instancing express router----*/
const router = express.Router();

/*-----Routing-----*/
router.get('/all',getUsers);
router.post('/create',createUser);
router.post('/update/:name',updateUser);
router.post('/delete/:name',deleteUser);

module.exports = router;