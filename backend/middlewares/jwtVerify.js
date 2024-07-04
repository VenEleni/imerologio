const jwt = require('jsonwebtoken');

const jwtVerify = (req, res, next) =>{
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        res.status(401).json({msg: "not authorized"});
    }
    else{
        const result = jwt.verify(token, "oula is cool");
        if(!result){
            res.status(401).json({msg: "not authorized"});          
        }
        else{
            next();
        }
    }
}

module.exports = jwtVerify;