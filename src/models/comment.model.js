export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static getAllComments(postId) {
        return comments.filter(comment => comment.postId == postId);
    }

    static addComment(comment) {
        comment.id = comments.length + 1;
        comments.push(comment);
    }

    static deleteComment(id) {
        const index = comments.findIndex(comment => comment.id == id);
        if (index !== -1) {
            comments.splice(index, 1);
        }
    }

    static updateComment(id, content) {
        const comment = comments.find(comment => comment.id == id);
        if (comment) {
            comment.content = content;
        }
    }
}

var comments = [
    new CommentModel(1, 1, 1, "Great post!"),
    new CommentModel(2, 2, 1, "I agree!"),
    new CommentModel(3, 1, 2, "Nice photo!"),
];
