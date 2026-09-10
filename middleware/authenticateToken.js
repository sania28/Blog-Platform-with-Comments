require('dotenv').config();
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            msg: "cannot procced without a token!"
        });
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({
                msg: "Invalid token found"
            });
        }

        req.user = user;
        console.log("user verified");
        next();
    });
};

module.exports = authenticateToken;
