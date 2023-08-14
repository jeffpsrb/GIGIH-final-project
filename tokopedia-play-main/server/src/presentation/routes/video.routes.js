import express from 'express';
import videoController from '../controllers/video.controller.js';

const router = express.Router();

router
  .route('/')
  .get(videoController.getVideos)
  .post(videoController.createNewVideo);

router
  .route('/:videoId')
  .get(videoController.getVideoById)
  .put(videoController.updateVideo)
  .delete(videoController.deleteVideo);

router
  .route('/:videoId/comments')
  .get(videoController.getSpecificVideoComments)
  .post(videoController.submitSpecificVideoComment);

router
  .route('/:videoId/products')
  .get(videoController.getSpecificVideoProducts)
  .post(videoController.createNewSpecificVideoProduct);

router
  .route('/:videoId/products/:productId')
  .get(videoController.getProductFromSpecificVideos)
  .put(videoController.updateSpecificVideoProduct)
  .delete(videoController.deleteSpecificVideoProduct);

export default router;
