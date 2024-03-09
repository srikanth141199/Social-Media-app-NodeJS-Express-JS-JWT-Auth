var likes = [
    { id: 1, userId: 1, postId: 1 },
    { id: 2, userId: 2, postId: 1 },
    { id: 3, userId: 3, postId: 2 },
    { id: 4, userId: 1, postId: 3 },
  ];
  
  let nextId = 5;
  
  export default class LikeModel {
    constructor(userId, postId) {
      this.id = nextId++;
      this.userId = userId;
      this.postId = postId;
    }
  
    static getAll() {
      return likes;
    }
  
    static getByPostId(postId) {
      return likes.filter((like) => like.postId === postId);
    }
  
    static toggle(userId, postId) {
      const existingLikeIndex = likes.findIndex(
        (like) => like.userId === userId && like.postId === postId
      );
  
      if (existingLikeIndex === -1) {
        const newLike = new LikeModel(userId, postId);
        likes.push(newLike);
      } else {
        likes.splice(existingLikeIndex, 1);
      }
  
      return LikeModel.getByPostId(postId);
    }
  }
  