import { Button } from "@mui/material"
import video from "../videos/bannervid.mp4"
import { Navigate, useNavigate } from "react-router-dom";
export const Banner = () => {


    const navigator = useNavigate();
    return (


        <div className="home-banner">


            <h1 className="banner-t" >Express Elegance </h1>
            <h4 className="banner-st"  >Where Writing Finds Its Home: Your space for expression and connection.</h4>
            <Button variant="contained"  onClick={()=>navigator("/create")}  style={{ borderRadius: "50px", backgroundColor: "white", padding: "10px 20px" ,color:"black"}}>Create Blog</Button>


    </div>
    )
}