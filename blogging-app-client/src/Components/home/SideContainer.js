
import { Button } from "@mui/material";
import { Categories } from "./Categories";
import {  useNavigate } from "react-router-dom";



export const SideContainer = (props)=>{
    const navigator = useNavigate();

    return <div className="side-container">
    <Button variant="contained" className="create-blog-btn" onClick={()=>{navigator("/create")}}  color="success">Create Blog</Button>
    <Categories onCategoryClick ={props.onCategoryClick}/>
    </div>
}