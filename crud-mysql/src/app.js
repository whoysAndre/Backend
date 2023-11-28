/*----Imports----*/
const express = require('express');
const path = require('node:path');
const router = require('./routes/userRoutes.js');
const connection = require('./connection.js');


/*----Instancing express----*/
const app = express();

/*----Settings----*/
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

/*----Middlewares----*/
app.use(express.text());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/*----Routing----*/
app.get('/',(req,res)=>{
  res.send('Welcome');
});
app.use('/users',router);

/*----Static File----*/
app.use(express.static(path.join(__dirname,'./public'))); 

/*----Server----*/
const port = 3000;
app.listen(port);