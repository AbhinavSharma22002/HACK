const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

router.post("/",fetchUser,(req,res)=>{

});
module.exports = router;
