const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({
    comment:{
        type:String
    },
    blog:{
        type:String,
    },
    postedBy:{
        type:String
    },
    postedTime: {
        type:Date,
    }
})

const Comment =  mongoose.model("comment",commentSchema);

module.exports = Comment;
