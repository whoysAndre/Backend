/*----Import----*/
const express = require('express');
require('./connection.js');
const userRouter = require('./routes/userRoutes.js');

/*----Instancing express----*/
const app = express();

/*----Settings----*/


/*----Middlewares */
app.use(express.urlencoded({extended:false}));

/*----Routing----*/
app.use(userRouter);



/*----Server-----*/
const port = 3000;
app.listen(port);