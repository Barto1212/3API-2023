import axios from "axios";
import { Post } from "../../../types";

export const getPosts: () => Promise<Post[]> = async () => {
  const posts = (await axios.get<Post[]>("http://localhost:5000/post")) ;

  return posts.data;
};
