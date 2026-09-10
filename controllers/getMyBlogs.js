const mongoose = require("mongoose");

const Post = require("../database/posts");



const getMyBlogs = async (req, res) => {
    const { usernamedb } = req.body;

    const allBlogs = await Post.find({ username: usernamedb })
    

    res.status(200).json({allBlogs})
}

module.exports = getMyBlogs;