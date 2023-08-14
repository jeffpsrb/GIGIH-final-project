import Comment from '../../domain/entities/comment.js';

class CommentMapper {
  static toDomainModel(commentModel) {
    const { _id: id, username, comment, createdAt } = commentModel;
    return new Comment(id, username, comment, createdAt);
  }

  static toDataModel(comment) {
    return {
      username: comment.username,
      comment: comment.comment,
      video: comment.videoId,
    };
  }
}

export default CommentMapper;
