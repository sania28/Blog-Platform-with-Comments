import React, { useState, useEffect } from "react";
import Header from "../header/header"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Alert, Button, FormControl, IconButton, InputLabel, LinearProgress, MenuItem, Select, Snackbar } from "@mui/material";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { Footer } from "../footer/Footer";
import { useNavigate } from "react-router-dom";






const UpdatePost = (props) => {

    const location = useLocation();
    const data = location.state;

    const initalPost = {
        title: data.title,
        description: data.description,
        picture: data.picture,
        username: data.username,
        categories: data.categories,
        createdDate:  data.createdDate,
        initialId:data._id,
    }
    
  
   
    
  
    const navigator = useNavigate();
    const [url, setUrl] = useState(data.picture);

    const accessToken = localStorage.getItem("accessToken")
    const [snackBarType, setSnackBarType] = useState("error")


    const username = localStorage.getItem("username");



    const [isLoading, setIsLoading] = useState(false);
    var [toOpen, setToOpen] = useState(false);
    var [errorMessage, setErrorMessage] = useState("");

    const [post, setPost] = useState(initalPost);
    const [file, setFile] = useState('')

    useEffect(() => {

        if (!localStorage.getItem("accessToken")) {
            navigator("/");
        }
        const getImage = async () => {

            if (file) {
                setIsLoading(true);
                const data = new FormData();
                data.append("file", file)




                try {

                    const response = await axios.post("http://localhost:8080/file/upload", data);

                    setIsLoading(false);
                    setUrl(response.data.url);
                    post.picture = response.data.url;


                }
                catch (e) {
                    setIsLoading(false);
                    console.log(e);
                    showSnackBar(e.response.data.msg)
                }


            }

        }
        getImage();



    }, [file])

    function showSnackBar(message) {

        setToOpen(true);
        setErrorMessage(message)
    }

    function handlechange(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }



    async function updatePost() {
        post.username = username;
      

        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": accessToken,
                }
            }

            const response = await axios.post("http://localhost:8080/update", post, config)
            setSnackBarType("success");
            setToOpen(true);
            showSnackBar(response.data.msg);
            navigator("/myBlogs")
        }
        catch (e) {
            setSnackBarType("error");
            setToOpen(true);
            showSnackBar("Internal Server Error ! Try Again")
        }





    }

    return <div>
        <Header />



        <div className="blog-container" >

            <Snackbar open={toOpen} autoHideDuration={6000} onClose={() => { setToOpen(false) }}>
                <Alert onClose={() => setToOpen(false)} severity={snackBarType} sx={{ width: '100%' }}>
                    {errorMessage}
                </Alert>
            </Snackbar>

            {isLoading && <LinearProgress />}

            <img src={url} alt="" />


            <div className="blog-header">
                <IconButton>
                    <label htmlFor="fileInput">
                        <AddPhotoAlternateIcon />
                    </label>
                </IconButton>

                <input onChange={(e) => setFile(e.target.files[0])} id="fileInput" style={{ display: "none" }} type="file" />


                <input value={post.title} type="text" placeholder="Blog Title" onChange={(e) => { handlechange(e) }} name="title" className="blog-title-input" />

                <FormControl style={{ width: "10%", margin: "0px 15px", borderRadius: "40px" }}>
                    <InputLabel className="category" id="demo-simple-select-label">Categories</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="categories"
                        style={{ borderRadius: "20px" }}
                        label="categories"
                        value={post.categories}
                        onChange={(e) => { handlechange(e) }}
                    >
                        <MenuItem value="Music">Music</MenuItem>
                        <MenuItem value="Movies">Movies</MenuItem>
                        <MenuItem value="Sports">Sports</MenuItem>
                        <MenuItem value="Technology">Technology</MenuItem>
                        <MenuItem value="Fashion">Fashion</MenuItem>
                    </Select>
                </FormControl>
                <Button className="create-blog-btn" onClick={updatePost} variant="contained">Update</Button>
            </div>
            <textarea value={post.description} className="blog-area" placeholder="Start Writing Here..." name="description" onChange={(e) => { handlechange(e) }} id="" cols="195" rows="10"></textarea>
        </div>

        <Footer />
    </div>
}


export default UpdatePost;
