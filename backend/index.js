const express = require('express');
const app = express();
const server = require('http').Server(app);
const Cors = require("cors");
const io = require('socket.io')(server);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());
const fetchUser = require('./middleware/fetchUser');
const TeachableMachine = require("@sashido/teachablemachine-node");

require('dotenv').config({path:__dirname+'/bin/.env'});
const database = require("./database/connectMongo");
database();

const indexRouter = require("./routers/index");
const socketIoStream = require('socket.io-stream');

app.use('/',indexRouter);

// const model = new TeachableMachine({
//     modelUrl:"https://teachablemachine.withgoogle.com/models/5JNAHeUO-/"
// });
app.post("/users/",fetchUser,(req,res)=>{
    model.classfiy({
        imageUrl: url
    }).then((predictions)=>{
        console.log(predictions);
        return res.json(predictions);
    }).catch((e)=>{
        console.error(e);
        res.status(500).send("Something went wrong");
    });
});

// io.of('/stream').on('connection',function(socket)
// {
//     ss(socket).on('stream',function(stream,data){
//         let fl = path.basename(data.name);
//         stream.pipe(fs.createWriteStream(fl));
//     });
// });

server.listen(3000,()=>{
    console.log("RUnning on 3000");
})
