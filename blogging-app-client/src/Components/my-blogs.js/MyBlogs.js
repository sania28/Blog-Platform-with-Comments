

import axios from "axios";
import React, { useEffect, useState } from "react"
import { PostsContainer } from "../home/PostsContainer";
import MyPostCard from "../home/MyPostCard";

import Header from "../header/header"
import { useNavigate } from "react-router-dom";


const MyBlogs = () => {




    const [posts, setPosts] = useState([]);
    const username = localStorage.getItem("username")
    const navigator = useNavigate();

    useEffect(() => {
        
        window.scrollTo(0, 0);
        
        if(!username){
            navigator("/")
        }

        async function getMyBlogs() {



            const config = {
                headers: {
                    "content-type": "application/json",
                }
            }

            const data = {
                usernamedb: username

            }


            try {
                const response = await axios.post("http://localhost:8080/myBlogs", data, config)
                setPosts(response.data.allBlogs);

            }
            catch (e) {
                console.log(e)
            }
        }

        getMyBlogs();




    }, [])

    


    


    return (

        <div>

        <Header/>
        <div className="my-blog-container">

        {posts.length==0 ?<div style={{
            display:"flex",
            alignItems:"center",
            justifySelf:"center",
            alignSelf:"center",
            justifyContent:"center",
            height:"75vh",
            width:"100vw"
        }}> <h1 style={{textAlign:"center", textTransform:"capitalize"}}>    You have not uploaded any blog yet </h1> </div> :

        
            posts.map(post=>{
                return (<MyPostCard key={Math.random()} post={post} />)

            })
        }
        </div>  
        </div>
    )

}

export default MyBlogs;


