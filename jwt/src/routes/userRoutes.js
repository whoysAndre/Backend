const express = require('express');
const {getAdmin,login,register} = require('../controllers/userController.js');
const verifyToken = require('../middleware/verifyToke.js');

const router = express.Router();

router.get('/admin',verifyToken,getAdmin);
router.post('/login',login);
router.post('/register',register);

module.exports = router;
