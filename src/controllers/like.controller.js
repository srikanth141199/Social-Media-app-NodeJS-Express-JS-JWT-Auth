import LikeModel from "../models/like.model.js";


export const getLikesByPostId = (req, res) => {
  const { postId } = req.params;
  const likes = LikeModel.getByPostId(parseInt(postId));
  const userId = req.session.userId
  console.log(likes);
  res.render("likes", { likes, postId, userId});
};

export const toggleLike = (req, res) => {
  const { postId } = req.params;
  const userId = req.session.userId
  const likes = LikeModel.toggle(userId, parseInt(postId));
  res.render("likes", { likes, postId, userId });
};
