const express = require('express');
const router = express.Router();
const User = require(process.env.Modelpath);
const fetchUser = require('../middleware/fetchUser');

const jwt = require('jsonwebtoken');

router.get("/",(req,res)=>{
    res.status(200).send("HELLO world");
});
router.post("/register",async (req,res)=>{

    let {name,location,permission,adharcard} = req.body;
    try{

        let user = await User.findOne({adharcard});

        if(user!==null && user.adharCard===adharcard){
            res.status(400).json({"error":"please try some other credentials"});
            return;
        }
        
        user = await User.create({
            name: name,
            location: location,
            permissions: permission,
            adharCard: adharcard
        });

        const data = {
            user: {
                id: user.id
            }
        };
        const authData = await jwt.sign(data, process.env.JWT_secret);

        res.status(200).json({authData});
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


router.post("/processing",fetchUser,(req,res)=>{
    const {url} = req.body;
    try{
        res.status(200).send(url);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
