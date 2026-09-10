import React, { useState, useEffect } from "react";
import Header from "../header/header";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
    Alert,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    LinearProgress,
    MenuItem,
    Select,
    Snackbar
} from "@mui/material";
import axios from "axios";
import { Footer } from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const initialPost = {
    title: "",
    description: "",
    picture: "",
    username: "",
    categories: "",
    createdDate: new Date(),
};

const BACKEND_URL = "https://blog-platform-backend-zt3t.onrender.com";

const CreatePost = () => {
    const navigator = useNavigate();

    const [url, setUrl] = useState(
        "https://res.cloudinary.com/dfzt40dlv/image/upload/v1701001742/blog-alternate-img_awwz1a.png"
    );

    const [snackBarType, setSnackBarType] = useState("error");
    const [isLoading, setIsLoading] = useState(false);
    const [toOpen, setToOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState("");

    const accessToken = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!localStorage.getItem("accessToken")) {
            navigator("/");
        }
    }, [navigator]);

    useEffect(() => {
        const getImage = async () => {
            if (!file) {
                return;
            }

            setIsLoading(true);

            const data = new FormData();
            data.append("file", file);

            try {
                const response = await axios.post(
                    `${BACKEND_URL}/file/upload`,
                    data
                );

                setUrl(response.data.url);

                setPost((prevPost) => ({
                    ...prevPost,
                    picture: response.data.url,
                }));

                setSnackBarType("success");
                showSnackBar("Image uploaded successfully");
            } catch (error) {
                console.log("Image upload error:", error);

                showSnackBar(
                    error.response?.data?.msg || "Image upload failed"
                );
            } finally {
                setIsLoading(false);
            }
        };

        getImage();
    }, [file]);

    function showSnackBar(message) {
        setErrorMessage(message);
        setToOpen(true);
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    }

    async function createPostOnPublish() {
        if (!accessToken) {
            setSnackBarType("error");
            showSnackBar("Please login again.");
            navigator("/");
            return;
        }

        const updatedPost = {
            ...post,
            username: username,
            picture: post.picture || url,
        };

        console.log("Post being sent:", updatedPost);

        if (
            !updatedPost.title.trim() ||
            !updatedPost.description.trim() ||
            !updatedPost.categories
        ) {
            setSnackBarType("error");
            showSnackBar("All Fields Are Required");
            return;
        }

        try {
            setIsLoading(true);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            const response = await axios.post(
                `${BACKEND_URL}/create`,
                updatedPost,
                config
            );

            console.log("Create post response:", response.data);

            setSnackBarType("success");
            showSnackBar(
                response.data?.msg || "Blog published successfully"
            );

            setTimeout(() => {
                navigator("/home");
            }, 1000);
        } catch (error) {
            console.log("Create post error:", error);

            setSnackBarType("error");

            showSnackBar(
                error.response?.data?.msg ||
                    error.response?.data?.error ||
                    "Internal Server Error"
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Header />

            <div className="blog-container">
                <Snackbar
                    open={toOpen}
                    autoHideDuration={6000}
                    onClose={() => setToOpen(false)}
                >
                    <Alert
                        onClose={() => setToOpen(false)}
                        severity={snackBarType}
                        sx={{ width: "100%" }}
                    >
                        {errorMessage}
                    </Alert>
                </Snackbar>

                {isLoading && <LinearProgress />}

                <img src={url} alt="Blog" />

                <div className="blog-header">
                    <div style={{ display: "flex" }}>
                        <IconButton>
                            <label htmlFor="fileInput">
                                <AddPhotoAlternateIcon />
                            </label>
                        </IconButton>

                        <input
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setFile(e.target.files[0]);
                                }
                            }}
                            id="fileInput"
                            style={{ display: "none" }}
                            type="file"
                        />

                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Blog Title"
                            name="title"
                            className="blog-title-input"
                        />
                    </div>

                    <div
                        style={{ display: "flex" }}
                        className="cont"
                    >
                        <FormControl
                            style={{
                                width: "10%",
                                margin: "0px 15px",
                                borderRadius: "40px",
                            }}
                        >
                            <InputLabel
                                className="category"
                                id="demo-simple-select-label"
                            >
                                Categories
                            </InputLabel>

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="categories"
                                style={{ borderRadius: "20px" }}
                                label="categories"
                                value={post.categories}
                                onChange={handleChange}
                            >
                                <MenuItem value="Music">
                                    Music
                                </MenuItem>

                                <MenuItem value="Movies">
                                    Movies
                                </MenuItem>

                                <MenuItem value="Sports">
                                    Sports
                                </MenuItem>

                                <MenuItem value="Technology">
                                    Technology
                                </MenuItem>

                                <MenuItem value="Fashion">
                                    Fashion
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            className="create-blog-btn"
                            onClick={createPostOnPublish}
                            variant="contained"
                            disabled={isLoading}
                        >
                            {isLoading ? "Publishing..." : "Publish"}
                        </Button>
                    </div>
                </div>

                <textarea
                    className="blog-area"
                    placeholder="Start Writing Here..."
                    name="description"
                    onChange={handleChange}
                    value={post.description}
                    cols="195"
                    rows="10"
                ></textarea>
            </div>

            <Footer />
        </div>
    );
};

export default CreatePost;
