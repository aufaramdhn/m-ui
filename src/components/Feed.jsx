import { Container } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Container sx={{ paddingTop: 10 }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
