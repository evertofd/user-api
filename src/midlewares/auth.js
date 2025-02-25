const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports=(req,res,next)=>{
    const authHeader = req.get("Authorization") 
    if(!authHeader){
        res.status(401).json({mensaje:"No hay token"})
    }
    const token = authHeader.split(" ")[1]
    let checkedToken;
    try {
        checkedToken = jwt.verify(token,process.env.JWT_KEY);
    } catch (error) {
        res.status(400).json({mensaje:"Erro al validar el token"})
    }

    if(!checkedToken){
        res.status(401).json({mensaje:"Token no valido"})
    }
    next()
}