const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://127.0.0.1:5500/",
      methods: ["GET", "POST"],
      allowedHeaders: [
        {"Access-Control-Allow-Origin" : "*"
    }],
      credentials: true
    }
  });;

const Cors = require("cors");


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());

require('dotenv').config({path:__dirname+'/bin/.env'});
const database = require("./database/connectMongo");
database();

const indexRouter = require("./routers/index");
app.use('/',indexRouter);


server.listen(3000,()=>{
    console.log("RUnning on 3000");
})
