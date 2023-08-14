import express from 'express';
import videoRoutes from './video.routes.js';
import productRoutes from './product.routes.js';
import commentRoutes from './comment.routes.js';

const router = express.Router();

router.use('/videos', videoRoutes);
router.use('/products', productRoutes);
router.use('/comments', commentRoutes);

export default router;
