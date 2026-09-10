const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({

    imgUrl:{
        type:String,
    
    }


})


const Image = new mongoose.model("image",imageSchema);

module.exports = Image;