import React, { useState, useEffect } from "react";
import Header from "../header/header"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Alert, Button, FormControl, IconButton, InputLabel, LinearProgress, MenuItem, Select, Snackbar } from "@mui/material";


import axios from "axios";
import { Footer } from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const initalPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date(),
}





const CreatePost = () => {

    const navigator = useNavigate();
    const [url, setUrl] = useState("https://res.cloudinary.com/dfzt40dlv/image/upload/v1701001742/blog-alternate-img_awwz1a.png")
    const accessToken = localStorage.getItem("accessToken")
    const [snackBarType, setSnackBarType] = useState("error")


    const username = localStorage.getItem("username");



    const [isLoading, setIsLoading] = useState(false);
    var [toOpen, setToOpen] = useState(false);
    var [errorMessage, setErrorMessage] = useState("");

    const [post, setPost] = useState(initalPost);
    const [file, setFile] = useState('')


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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



    async function createPostOnPublish() {
        post.username = username;

       
        if (!post.picture) {
            post.picture = url;
        }

        console.log(post);

        if (post.title == '' || post.description == '' || post.categories == '') {
            setSnackBarType("error");
            setToOpen(true);
            showSnackBar("All Fields Are Required");
        } else {


            try {
                const config = {
                    headers: {
                        "content-type": "application/json",
                        "Authorization": accessToken,
                    }
                }

                const response = await axios.post("http://localhost:8080/create", post, config)
                setSnackBarType("success");
                setToOpen(true);
                showSnackBar(response.data.msg);
                navigator("/home")
            }
            catch (e) {
                setSnackBarType("error");
                setToOpen(true);
                showSnackBar(e.response.data.msg)
            }
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

                <div style={{ display: "flex" }}>
                    <IconButton>
                        <label htmlFor="fileInput">
                            <AddPhotoAlternateIcon />
                        </label>
                    </IconButton>

                    <input onChange={(e) => setFile(e.target.files[0])} id="fileInput" style={{ display: "none" }} type="file" />


                    <input onChange={(e)=>handlechange(e)} type="text" placeholder="Blog Title" name="title" className="blog-title-input" />
                </div>

                <div style={{ display: "flex" }} className="cont">
                    <FormControl style={{ width: "10%", margin: "0px 15px", borderRadius: "40px" }}>
                        <InputLabel className="category" id="demo-simple-select-label">Categories</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="categories"
                            style={{ borderRadius: "20px" }}
                            label="categories"
                            onChange={(e) => { handlechange(e) }}
                        >
                            <MenuItem value="Music">Music</MenuItem>
                            <MenuItem value="Movies">Movies</MenuItem>
                            <MenuItem value="Sports">Sports</MenuItem>
                            <MenuItem value="Technology">Technology</MenuItem>
                            <MenuItem value="Fashion">Fashion</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className="create-blog-btn" onClick={createPostOnPublish} variant="contained">Publish</Button>
                </div>
            </div>
            <textarea className="blog-area" placeholder="Start Writing Here..." name="description" onChange={(e) => { handlechange(e) }} id="" cols="195" rows="10"></textarea>
        </div>

        <Footer />
    </div>
}


export default CreatePost;
