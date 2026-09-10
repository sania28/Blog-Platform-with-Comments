const Post = require("../database/posts.js")

const updatePost = async (req, res) => {
    
    const post = req.body;
    const newValue = {
        title:post.title,
        description:post.description,
        picture: post.picture,
        username:post.username,
        categories:post.categories,
        createdDate: new Date(),
    }
    console.log(post.initialId);

    await Post.updateOne({_id:post.initialId},newValue),
    
    res.status(200).json({msg:"uploaded succesffully"})

}

module.exports = updatePost;