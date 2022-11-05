const express = require('express');
const app = express();
require('dotenv').config({path:__dirname+'/bin/.env'})
const database = require("./database/connectMongo");
database();
const indexRouter = require("./routers/index");
const userRouter = require("./routers/user");

app.use('/',indexRouter);
app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log("RUnning on 3000");
})
