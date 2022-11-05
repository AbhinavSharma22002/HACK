const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());
const fetchUser = require('./middleware/fetchUser');

require('dotenv').config({path:__dirname+'/bin/.env'});

const database = require("./database/connectMongo");
database();

const indexRouter = require("./routers/index");

app.use('/',indexRouter);

app.post("/users/",fetchUser,(req,res)=>{
    // io.on('connection' , (socket)=>{
    //     socket.on('newUser' , (id)=>{
            
    //     });
    // });
    
});



server.listen(3000,()=>{
    console.log("RUnning on 3000");
})
