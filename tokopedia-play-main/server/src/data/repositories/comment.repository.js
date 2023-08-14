import commentModel from '../database/model/comment.js';

class CommentRepository {
  async getComments(videoId) {
    const filter = {};
    if (videoId) filter.video = videoId;
    const comments = await commentModel.find(filter);
    return comments;
  }

  async submitComment(commentData) {
    const newComment = await commentModel.create(commentData);
    return newComment;
  }
}

export default new CommentRepository();
