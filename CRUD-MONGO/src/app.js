/*----Imports----*/
const express = require('express');
const router = require('./routes/userRoutes.js');
require('./connection.js');

/*----Instancing express----*/
const app = express();

/*----Middlewares----*/
app.use(express.urlencoded({extended:false}));

/*----Routing----*/
app.get('/',(req,res)=>{
  res.send('Welcome');
});
app.use('/users',router);


/*----Server----*/
const port = 3000;
app.listen(port);