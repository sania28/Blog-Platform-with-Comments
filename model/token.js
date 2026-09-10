const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
    token:{
        type:String
    }
})

const token = mongoose.model("token",tokenSchema)

module.exports = token;