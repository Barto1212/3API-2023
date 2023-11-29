import { Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { deletePost, getPosts } from "./utils/api";
import { Post as PostType } from "../../types";
import DialogForm from "./components/dialogs/DialogForm";
import Posts from "./components/Posts";
import LoginForm from "./components/dialogs/LoginForm";

const App = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  async function deleteThisPost(_id: string) {
    await deletePost(_id);
    setPosts((oldPosts) => {
      const idToDelete = oldPosts.findIndex((p) => p._id === _id);
      idToDelete > 0 && oldPosts.splice(idToDelete, 1);
      return oldPosts;
    });
  }
  useEffect(() => {
    getPosts().then((response) => {
      setPosts(() => [...response]);
    });
  }, [posts]);
  return (
    <>
      <Stack
        sx={{ marginBottom: 5 }}
        direction="row"
        spacing={3}
        justifyContent="flex-end"
      >
        <DialogForm />
        <LoginForm />
      </Stack>
      <Container sx={{ width: "100%" }}>
        {posts && posts.length > 0 && (
          <Posts deleteFunc={deleteThisPost} posts={posts} />
        )}
      </Container>
    </>
  );
};

export default App;
