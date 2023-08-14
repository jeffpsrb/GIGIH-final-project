import commentService from '../../domain/services/comment.service.js';
import sendResponse from '../utils/response/sendResponse.js';

class CommentController {
  #commentService;

  constructor() {
    this.#commentService = commentService;
  }

  getComments = async (req, res) => {
    try {
      const comments = await this.#commentService.getComments();
      sendResponse.success(res, comments);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };
}

export default new CommentController();
