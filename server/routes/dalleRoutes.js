import express from "express";
import "dotenv/config";
import { createPost } from "../controller/dalleController.js";

const dalleRouter = express.Router();

dalleRouter.post("/", createPost);

export default dalleRouter