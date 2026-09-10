const Post = require("../database/posts.js")



const deleteBlog = async (req, res) => {
    const { id } = req.body;
    console.log(id);




        await Post.deleteOne({ _id: id })
        
        res.status(200).json({ msg: "deleted" })

    

}

module.exports = deleteBlog;