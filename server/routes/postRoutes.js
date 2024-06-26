import express from "express";
import "dotenv/config"
import { createPost, getAllPosts } from "../controller/postController.js";

const postRouter = express.Router()

postRouter.get("/", getAllPosts)
postRouter.post("/", createPost);


export default postRouter