const Post = require("../database/posts.js")

const createPost = async (req,res)=>{


   try{

    const Blog = new Post(req.body);
    await Blog.save();
    res.status(200).json({msg:"Blog Published Successfully"})

   }catch(e){
    
    res.status(501).json({msg:"Cannot Publish Blog , Try Again."})
   }
 



}

module.exports = createPost