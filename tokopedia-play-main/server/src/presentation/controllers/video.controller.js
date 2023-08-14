import videoService from '../../domain/services/video.service.js';
import commentService from '../../domain/services/comment.service.js';
import productService from '../../domain/services/product.service.js';
import sendResponse from '../utils/response/sendResponse.js';

class VideoController {
  #videoService;
  #commentService;
  #productService;

  constructor() {
    this.#videoService = videoService;
    this.#commentService = commentService;
    this.#productService = productService;
  }

  getVideos = async (req, res) => {
    try {
      const videos = await this.#videoService.getVideos(req.query);
      sendResponse.success(res, videos);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  getVideoById = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await this.#videoService.getVideoById(videoId);
      sendResponse.success(res, video);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  getSpecificVideoComments = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await this.#videoService.getVideoById(videoId);
      const comments = await this.#commentService.getComments(video.id);
      sendResponse.success(res, comments);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  getSpecificVideoProducts = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await this.#videoService.getVideoById(videoId);
      const comments = await this.#productService.getProducts(video.id);
      sendResponse.success(res, comments);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  getProductFromSpecificVideos = async (req, res) => {
    try {
      const { videoId, productId } = req.params;
      await this.#videoService.getVideoById(videoId);
      const product = await this.#productService.getProductById(productId);
      sendResponse.success(res, product);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  createNewVideo = async (req, res) => {
    try {
      const newVideo = await this.#videoService.createNewVideo(req.body);
      sendResponse.success(res, newVideo, 201);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  submitSpecificVideoComment = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await this.#videoService.getVideoById(videoId);
      const newComment = await this.#commentService.submitComment(
        video.id,
        req.body
      );
      sendResponse.success(res, newComment, 201);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  createNewSpecificVideoProduct = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await this.#videoService.getVideoById(videoId);
      const newProduct = await this.#productService.createNewProduct(
        video.id,
        req.body
      );
      sendResponse.success(res, newProduct, 201);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  updateVideo = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await this.#videoService.getVideoById(videoId);
      const updatedVideo = await this.#videoService.updateVideo(
        video.id,
        req.body
      );
      sendResponse.success(res, updatedVideo, 201);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  updateSpecificVideoProduct = async (req, res) => {
    try {
      const { videoId, productId } = req.params;
      await this.#videoService.getVideoById(videoId);
      const product = await this.#productService.getProductById(productId);
      const updatedProduct = await this.#productService.updateProduct(
        product.id,
        req.body
      );
      sendResponse.success(res, updatedProduct, 201);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  deleteVideo = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await this.#videoService.getVideoById(videoId);
      await this.#videoService.deleteVideo(video.id);
      sendResponse.success(res, 204);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  deleteSpecificVideoProduct = async (req, res) => {
    try {
      const { videoId, productId } = req.params;
      await this.#videoService.getVideoById(videoId);
      const product = await this.#productService.getProductById(productId);
      await this.#productService.deleteProduct(product.id);
      sendResponse.success(res, 204);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };
}

export default new VideoController();
