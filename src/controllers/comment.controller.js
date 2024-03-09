import CommentModel from "../models/comment.model.js";


export default class CommentController {
    getAllComments(req, res) {
        const postId = req.params.id;
        const comments = CommentModel.getAllComments(postId);
        res.render("comments", { comments });
    }

    addComment(req, res) {
        const {content } = req.body;
        const userId = req.session.userId;
        const postId = req.params.id
        const comment = new CommentModel(null, userId, postId, content);
        CommentModel.addComment(comment);
        res.redirect(`/api/comments/${postId}`);
    }

    deleteComment(req, res) {
        const id = req.params.id;
        CommentModel.deleteComment(id);
        res.redirect("/");
        // const comments = CommentModel.getAllComments(postId);
        // res.render("comments", { comments });
    }

    updateComment(req, res) {
        const id = req.params.id;
        const { content } = req.body;
        CommentModel.updateComment(id, content);
        res.redirect("/"); 
        //const comments = CommentModel.getAllComments(postId);
        //res.render("comments", { comments });
    }
}
