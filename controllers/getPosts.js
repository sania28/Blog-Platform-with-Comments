const Post = require("../database/posts.js")

const getPosts = async (req, res) => {

    const { category } = req.body;

    if(category===""){
        try {
            const Blogs = await Post.find({});
    
            res.status(200).json({ blogs: Blogs });
        }
        catch (e) {
            console.log(e);
        }
    }else{
        try {
            const Blogs = await Post.find({ categories: category });
    
            res.status(200).json({ blogs: Blogs });
        }
        catch (e) {
            console.log(e);
    }
}
}

module.exports = getPosts;