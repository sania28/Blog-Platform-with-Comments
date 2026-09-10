const Comment = require("../model/comments")

const addComment= async (req,res)=>{

    try{
        
        commentData = req.body;
        const comment =  new Comment(commentData);
        await comment.save();
        res.status(200).json({msg:"comment posted successfully"})
    
    
    }catch(e){
        res.status(501).json({msg:"internal server error"})
        console.log(e);
    }
   

}

module.exports = addComment