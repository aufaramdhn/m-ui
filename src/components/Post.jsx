import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const Post = () => {
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          image="https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
          title="My Post"
          sx={{ height: 250, width: "100%" }}
        />
        <CardContent>
          <Typography variant="h5">My Firs Post</Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem explicabo iusto similique hic eius sapiente nulla
            modi enim earum! Saepe.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
