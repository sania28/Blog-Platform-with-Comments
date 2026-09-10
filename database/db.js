require('dotenv').config();
const mongoose = require("mongoose");

const connection = async ()=>{
   
    try{
        const connect = await mongoose.connect(process.env.URL);
        console.log("connected to the DataBase")
    }
    catch(e){
        console.log(e)
    }
}

module.exports = connection;
