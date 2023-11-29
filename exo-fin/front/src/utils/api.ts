import axios from "axios";
import { NewPost, Post } from "../../../types";

export const getPosts: () => Promise<Post[]> = async () => {
  const posts = (await axios.get<Post[]>("http://localhost:5000/post")) ;
  return posts.data;
};

export const postPost: (newPost: NewPost) => Promise<string> = async (newPost) => {
  const posts = (await axios.post<string>("http://localhost:5000/post",newPost)) ;
  return posts.data;
};
