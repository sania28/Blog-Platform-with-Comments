import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon } from 'react-share';




export default function PostCard({post}) {
  const navigate=  useNavigate();

  const username = localStorage.getItem('username');
  

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
          {post.description.slice(1,200) + "....."}
        </Typography>
        <br />
        <Typography variant="body2"  style={{fontWeight:"bolder",textTransform:"capitalize"}} color="text.secondary">
          Author: {post.username==username ? "You" : post.username }
        </Typography>
        <Typography variant="body2"  style={{textTransform:"capitalize"}} color="text.secondary">
          Category: {post.categories}
        </Typography>
        <Typography variant="body2"  style={{textTransform:"capitalize"}} color="text.secondary">
          Published On: {post.createdDate.slice(0,10)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={()=>{
         navigate(`/blog/${post._id}`)
        }}>Read More</Button>
        <div>
      {/* <FacebookShareButton
        url={`/blog/${post._id}`}
        quote={post.title}
        
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton> */}
    </div>
    </CardActions>
    </Card>
  );
}
