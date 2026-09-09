import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from "axios"






export default function MyPostCard({ post }) {
  const navigate = useNavigate();
  

  const username = localStorage.getItem('username');






  // creating delete functionaltiy

  function deleteBlog() {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    }

    const data = {
      id: post._id,
    }
    try {
      const response = axios.post("http://localhost:8080/delete", data, config)
      console.log(response.data.msg);
      window.location.reload(false)

    }
    catch (e) {
      window.location.reload(false);


    }

  }

  return (


    <Card className='post-card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={post.picture}
        title={post.title}
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description.slice(1, 200) + "....."}
        </Typography>
        <br />
        <Typography variant="body2" style={{ fontWeight: "bolder", textTransform: "capitalize" }} color="text.secondary">
          Author: {post.username == username ? "You" : post.username}
        </Typography>
        <Typography variant="body2" style={{ textTransform: "capitalize" }} color="text.secondary">
          Category: {post.categories}
        </Typography>
        <Typography variant="body2" style={{ textTransform: "capitalize" }} color="text.secondary">
          Published On: {post.createdDate.slice(0, 10)}
        </Typography>
      </CardContent>


      <CardActions>

        <Button onClick={deleteBlog} size="small">Delete</Button>
        <Button onClick={() => {
         navigate("/update", {state:post} );

        }} size="small">Edit</Button>




        <Button size="small" onClick={() => {
          navigate(`/blog/${post._id}`)
        }}>Read More</Button>

      </CardActions>

    </Card>
  );
}
