
require('dotenv').config();
const jwt = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {



    const authHeader = req.headers['authorization'];


    const token = authHeader && authHeader.split(' ')[1];


    if (token === null) {
        res.status(501).json({ msg: "cannot procced without a token!" })
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
        
        if (err) {
            res.status(502).json({ msg: "Invalid token found" });
        }
        else {
            req.user = user;
            console.log("user verified")
            next();

        }

    })






}

module.exports = authenticateToken
