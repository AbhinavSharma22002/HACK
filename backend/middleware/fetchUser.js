const jwt = require('jsonwebtoken');

const fetchUser = (req,res,next)=>{
    const token = req.header('authtoken');
    if(!token){
        res.status(401).send({"error":"Please register yourself"});
    }
    try{
        const data = jwt.verify(token,process.env.JWT_secret);
        req.user = data.user;
        next();
    }
    catch(error){
        console.log(error);
        res.status(500).send({"error":"Internal Server Error"});
    }
};

module.exports = fetchUser;