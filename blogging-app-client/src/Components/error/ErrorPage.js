import { useNavigate } from "react-router-dom"
import "./error-styles.css"

export const ErrorPage = () => {


    const navigator= useNavigate();


    return (
        <div class="section">
  <h1 class="error">404</h1>
  <div class="page">Ooops!!! The page you are looking for is not found</div>
  <a class="back-home" onClick={()=>{
    navigator("/home")
  }} >Back to home</a>
</div>
    )
}