const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../model/user");
const token = require("../model/token");

const signupUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const usernameDb = username.toLowerCase();

        const user = await User.findOne({ username: usernameDb });
        const emailExists = await User.findOne({ email });

        if (user) {
            return res.status(501).json({
                msg: "Username Already Taken"
            });
        }

        if (emailExists) {
            return res.status(502).json({
                msg: "User with this Email already exists"
            });
        }

        const newUser = new User({
            username: usernameDb,
            email: email,
            password: password
        });

        await newUser.save();

        return res.status(200).send("Successfull");

    } catch (e) {
        console.log("Signup Error:", e);

        return res.status(503).json({
            msg: "Internal Server error"
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(501).json({
                msg: "User with this email does not exists"
            });
        }

        const dbPassword = user.password;

        if (password !== dbPassword) {
            return res.status(502).json({
                msg: "Enter correct password"
            });
        }

        // Check JWT secrets before creating tokens
        if (!process.env.ACCESS_SECRET_KEY) {
            console.error("ACCESS_SECRET_KEY is missing");
            return res.status(500).json({
                msg: "ACCESS_SECRET_KEY is missing on server"
            });
        }

        if (!process.env.REFRESH_SECRET_KEY) {
            console.error("REFRESH_SECRET_KEY is missing");
            return res.status(500).json({
                msg: "REFRESH_SECRET_KEY is missing on server"
            });
        }

        const userData = user.toJSON();

        const accessToken = jwt.sign(
            userData,
            process.env.ACCESS_SECRET_KEY,
            { expiresIn: "1h" }
        );

        const refreshToken = jwt.sign(
            userData,
            process.env.REFRESH_SECRET_KEY,
            { expiresIn: "7d" }
        );

        const newToken = new token({
            token: refreshToken
        });

        await newToken.save();

        return res.status(200).json({
            msg: "Login Successfull",
            accessToken: accessToken,
            refreshToken: refreshToken,
            username: user.username
        });

    } catch (e) {
        console.log("Login Error:", e);

        return res.status(503).json({
            msg: "Internal Server error"
        });
    }
};

module.exports = {
    signupUser,
    loginUser
};
