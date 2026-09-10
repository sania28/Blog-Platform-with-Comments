const Comment  = require("../model/comments");


const fetchComments = async (req, res) => {

    const {blogId} = req.body;
    try{
        const allComments  =  await Comment.find({blog:blogId})
        res.status(200).json({data:allComments})
    }
    catch(e){
        console.log(e);
        res.status(501).json({msg:"Internal Server Error"})

    }
 


}

module.exports = fetchComments;