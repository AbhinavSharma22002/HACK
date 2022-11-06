const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    permissions: {
        type: String,
        required: true
    },
    adharCard: {
        type: String,
        required: true
    }
});

const User = mongoose.model("users",UserSchema);
module.exports = User;