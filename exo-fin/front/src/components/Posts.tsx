import type { FC } from "react";
import type { Post as PostProps } from "../../../types";
import Post from "./Post";
import { Stack } from "@mui/material";
type P = {
  posts: PostProps[];
};
const Posts: FC<P> = ({ posts }) => {
  console.log(posts);

  return (
    <Stack spacing={5} direction="column" alignItems="center">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </Stack>
  );
};
export default Posts;
