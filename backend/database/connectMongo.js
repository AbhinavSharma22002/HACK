const mongoose = require('mongoose');
const mongoURL = process.env.DATABASE_LINK;

const connectToMongo = async()=>{
    await mongoose.connect(mongoURL,()=>{
        console.log("Connected to database");
});
}

module.exports = connectToMongo;