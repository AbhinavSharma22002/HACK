const express = require('express');
const router = express.Router();
const User = require(process.env.Modelpath);
const {body,validationResult} = require("express-validator");

const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');


module.exports = router;
