import PostModel from "../models/post.model.js";

export default class PostController{

    getAddPost(req, res){
        res.render("addPost");
    }

    addPost(req, res){
        const {caption} = req.body;
        const imageUrl = 'images/' + req.file.filename;
        const userId = req.body.userId;
        const posts = PostModel.add(userId, caption, imageUrl);
        res.render("posts",{posts : posts})
    }

    getAll(req, res){
        const posts = PostModel.getAll();
        res.render("posts",{posts : posts})
    }

    deletePost(req, res){
        const {id} = req.params;
        const userId = req.body.userId;
        const result = PostModel.delete(id, userId);
        console.log(result);
        const posts = PostModel.getAll();
        res.render("posts",{posts : posts})
    }

    getPostDetails(req, res){
        const {id} = req.params;
        const post = PostModel.postDetails(id);
        res.render("postDetails", {post:post});
    }

    getPostsByUser(req, res){
        const userId = req.body.userId;
        const posts = PostModel.userPosts(userId);
        res.render("posts", {posts:posts});
    }

    updatePost(req, res){
        const {id} = req.params;
        const {caption, userId} = req.body;
        const imageUrl = req.file.filename;

        const post = PostModel.updatePost(id, userId, caption, imageUrl);
        res.render("postDetails", {post:post})
    }
}