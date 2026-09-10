const Post = require("../database/posts.js")
var ObjectId = require('mongoose').Types.ObjectId; 


const getBlog = async (req, res) => {

     
    const objectId = req.params.id;


    try{
        const blogData = await Post.findOne({_id:new ObjectId(objectId) })
        

        if(blogData.length==0){
            res.status(404).json({msg:"Invalid Object Id"});
        }else{
            res.status(200).json({blogData:blogData})
        }
    }catch(e){
        res.status(404).json({msg:"Invalid Object Id"});
    }
   
 

   




}


module.exports = getBlog