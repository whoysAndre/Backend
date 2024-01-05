/*----Imports----*/
import express from "express";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import { PORT } from "./config/envs.js";
import "./connection.js";


/*----Instancing express----*/
const app = express();

/*----Middlewares----*/
app.use(express.urlencoded({extended:false}));

/*----Routing----*/
app.get('/',(req,res)=>{
  res.send('Welcome');
});

app.use('/users',userRouter);
app.use('/auth',authRouter);


/*----Server----*/
app.listen(PORT);

