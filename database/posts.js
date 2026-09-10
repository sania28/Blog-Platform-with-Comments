const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

    title:{
        type:String,
    },
    description:{
        type:String,
    },
    picture:{
        type:String
    },
    username:{
        type:String,
    },
    categories:{
        type:String,
    },
    createdDate:{
        type:Date,
    }

})


const Post = new mongoose.model("post",postSchema);

module.exports = Post;