import express from "express";
import { getLikesByPostId, toggleLike } from "../controllers/like.controller.js";


const likesRouter = express.Router();

likesRouter.get("/:postId", getLikesByPostId);
likesRouter.post("/toggle/:postId", toggleLike);

export default likesRouter;
