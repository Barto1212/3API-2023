import { Container, Stack } from "@mui/material";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { getPosts } from "./utils/api";
import { Post as PostType } from "../../types";
import DialogForm from "./components/DialogForm";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    getPosts().then((response) => {
      setPosts(() => [...response]);
    });
  }, []);
  return (
    <>
      <Container sx={{ width: "100%" }}>
        {posts && posts.length > 0 && <Posts posts={posts} />}
      </Container>
      <DialogForm />
    </>
  );
};

export default App;
