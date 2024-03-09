import express from "express";
import PostController from "../controllers/post.controller.js";
import { upload } from "../middlewares/fileUpload.middleware.js";

const postsRouter = express.Router();
const postController = new PostController;

postsRouter.get("/all", postController.getAll);
postsRouter.get("/addPost", postController.getAddPost);
postsRouter.get("/:id", postController.getPostDetails);
postsRouter.get("/", postController.getPostsByUser);
postsRouter.post("/", upload.single('image'), postController.addPost);
postsRouter.post("/:id", postController.deletePost);


export default postsRouter;