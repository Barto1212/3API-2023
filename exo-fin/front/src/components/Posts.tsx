import type { FC } from "react";
import type { Post as PostProps } from "../../../types";
import Post from "./Post";
import { Stack } from "@mui/material";
type P = {
  posts: PostProps[],
  deleteFunc: (id: string) => void;

};
const Posts: FC<P> = ({ posts, deleteFunc }) => {
  return (
    <Stack spacing={5} direction="column" alignItems="center">
      {posts.map((post) => (
        <Post post={post} deleteFunc={deleteFunc} key={post._id} />
      ))}
    </Stack>
  );
};
export default Posts;
