import productService from '../../domain/services/product.service.js';
import sendResponse from '../utils/response/sendResponse.js';

class CommentController {
  #productService;

  constructor() {
    this.#productService = productService;
  }

  getProducts = async (req, res) => {
    try {
      const products = await this.#productService.getProducts();
      sendResponse.success(res, products);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };

  updateProduct = async (req, res) => {
    try {
      const { productId } = req.params;
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

  deleteProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await this.#productService.getProductById(productId);
      await this.#productService.deleteProduct(product.id);
      sendResponse.success(res, 204);
    } catch (err) {
      sendResponse.error(res, err);
    }
  };
}

export default new CommentController();
