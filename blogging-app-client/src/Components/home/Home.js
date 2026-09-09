import Header from "../header/header"
import { useNavigate } from "react-router-dom";
import { SideContainer } from "./SideContainer";
import { PostsContainer } from "./PostsContainer";
import { Banner } from "./Banner";
import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";


export const Home = () => {

    const [category,setCategory] = useState("");

    function setCategoryOnClick(category){
        setCategory(category);
       
    }

    const navigator = useNavigate();
    useEffect(() => {

        if (!localStorage.getItem("accessToken")) {
            navigator("/");
        }
    })

    return (<div>


        <Header/>
        <br />
        <br /> 
        <br />

        <Banner/>

        <div className="home-main-area">
            <SideContainer onCategoryClick ={setCategoryOnClick} />
            <PostsContainer category={category} />
        </div>

        <Footer/>


    </div>
    )
}

