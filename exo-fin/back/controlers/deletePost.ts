import type { Request, Response } from "express";
import type { NewPost } from "../../types";
import { PostMongoose } from "../models/Post";

export async function deletePost(
  req: Request<{ id: string }, {}, NewPost>,
  res: Response
) {
  await PostMongoose.findByIdAndDelete(req.params.id);
  res.sendStatus(201);
}
