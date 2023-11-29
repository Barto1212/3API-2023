import axios from "axios";
import { Post } from "../../../types";

export const getPosts: () => Promise<Post[]> = async () => {
  const posts = (await axios.get("http://localhost:5000/post")) as Post[];
  console.log(posts);

  return posts;
};
