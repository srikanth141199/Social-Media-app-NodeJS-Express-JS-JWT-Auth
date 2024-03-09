import express from "express";
import CommentController from "../controllers/comment.controller.js";

const commentsRouter = express.Router();
const commentController = new CommentController;

commentsRouter.get("/:id", commentController.getAllComments);
commentsRouter.post("/:id", commentController.addComment);
commentsRouter.delete("/:id", commentController.deleteComment);
commentsRouter.put("/:id", commentController.updateComment);

export default commentsRouter;
