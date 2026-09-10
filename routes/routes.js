const express = require("express");
const { signupUser, loginUser } = require("../controllers/user-controller");
const imageController = require("../controllers/image-controller");
const upload = require("../utils/upload")
const route = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
const createPost = require("../controllers/create-post.js");
const getPosts = require("../controllers/getPosts.js");
const getBlog = require("../controllers/getBlog.js");
const getMyBlogs = require("../controllers/getMyBlogs.js");
const deleteBlog = require("../controllers/delete-blog.js");
const updatePost = require("../controllers/update-post.js");
const addComment = require("../controllers/add-comment.js");
const fetchComments = require("../controllers/fetch-comments.js");
route.post("/signup", signupUser);
route.post("/login", loginUser);
route.post("/file/upload", upload, imageController);
route.post("/create", authenticateToken, createPost)
route.post("/update", updatePost)
route.post("/getPosts", getPosts);
route.post("/addcomment", addComment)
route.post("/myBlogs", getMyBlogs)
route.post("/fetchComments", fetchComments)
route.get("/blog/:id", getBlog)
route.post("/delete",deleteBlog);

module.exports = route;