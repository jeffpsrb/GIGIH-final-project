import commentRepository from '../../data/repositories/comment.repository.js';
import commentMapper from '../../data/mapper/comment.mapper.js';
import ResponseError from '../../presentation/utils/errors/responseError.js';

class CommentService {
  #commentRepository;

  constructor() {
    this.#commentRepository = commentRepository;
  }

  async getComments(videoId) {
    const comments = await this.#commentRepository.getComments(videoId);
    return comments.map((comment) => commentMapper.toDomainModel(comment));
  }

  async submitComment(videoId, payload) {
    const { username, comment } = payload;
    if (!username || !comment) {
      throw new ResponseError('please provide username and comment', 400);
    }
    const commentData = commentMapper.toDataModel({
      ...payload,
      videoId,
    });
    const newComment = await this.#commentRepository.submitComment(commentData);
    return commentMapper.toDomainModel(newComment);
  }
}

export default new CommentService();
