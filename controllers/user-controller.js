const jwt = require("jsonwebtoken")
require('dotenv').config();
const User = require("../model/user");
const token = require("../model/token")

const signupUser = async (req, res) => {


    try {
        const { username, email, password } = req.body;

      
        var usernameDb = username.toLowerCase()
       
        const user = await User.findOne({ username:usernameDb })
        const emailExists = await User.findOne({ email })
        if (user) {
            res.status(501).json({ msg: "Username Already Taken" })

        }


        else if (emailExists) {
            res.status(502).json({ msg: "User with this Email already exists" })
        }

        else {
            const newUser = new User({ 
                username:usernameDb,
                email:email,
                password:password
             });
            await newUser.save();
            res.status(200).send("Successfull");
        }


        // const newUser = new User(user);
        // await newUser.save();


    } catch (e) {
      console.log(e)
        res.status(503).json({ msg: "Internal Server error" })
    }


}

const loginUser = async (req, res) => {


    try {
        const { email, password } = req.body;

      
    
        const user = await User.findOne({ email })
       
        if (user) {
          const dbPassword = user.password;

          if(password===dbPassword){

              const accessToken = jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY)
              const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY)

              const newToken = new token({token:refreshToken});
              await newToken.save();

            res.status(200).json({msg:"Login Successfull", accessToken:accessToken, refreshToken:refreshToken, username:user.username})

          }
          else{
            res.status(502).json({msg:"Enter correct password"})
          }

        }else{
            res.status(501).json({msg:"User with this email does not exists"})
        }

    

    } catch (e) {
      console.log(e)
        res.status(503).json({ msg: "Internal Server error" })
    }


}

module.exports = { signupUser,loginUser };