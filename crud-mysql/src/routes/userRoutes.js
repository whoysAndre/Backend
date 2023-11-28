/*----Imports----*/
const express = require('express');
const {
  getUsers,
  getCreateUser,
  getUpdateUser,
  getDeleteUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userControllers.js');


/*----Instancing Router express----*/
const router  = express.Router();


/*----Routes Views----*/
router.get('/all',getUsers);
router.get('/create',getCreateUser);
router.get('/update/:id',getUpdateUser);
router.get('/delete/:id',getDeleteUser);

/*----Routes CRUD----*/
router.post('/create',createUser);
router.post('/update/:id',updateUser);
router.post('/delete/:id',deleteUser);


/*----Exports----*/
module.exports = router;