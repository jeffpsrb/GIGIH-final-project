import productRepository from '../../data/repositories/product.repository.js';
import productMapper from '../../data/mapper/product.mapper.js';
import { getObjectId } from '../../presentation/utils/index.js';
import ResponseError from '../../presentation/utils/errors/responseError.js';

class ProductService {
  #productRepository;

  constructor() {
    this.#productRepository = productRepository;
  }

  async getProducts(videoId) {
    const products = await this.#productRepository.getProducts(videoId);
    return products.map((product) => productMapper.toDomainModel(product));
  }

  async getProductById(productId) {
    const objectId = getObjectId({
      id: productId,
      entity: 'product',
    });
    const product = await this.#productRepository.getProductById(objectId);
    if (!product) {
      throw new ResponseError('no products found with that ID', 404);
    }
    return productMapper.toDomainModel(product);
  }

  async createNewProduct(videoId, payload) {
    const { title, price, imageUrl, productUrl } = payload;
    if (!title || !price || !imageUrl || !productUrl) {
      throw new ResponseError(
        'please provide title, price, imageUrl, and productUrl',
        400
      );
    }
    const productData = productMapper.toDataModel({
      ...payload,
      videoId,
    });
    const newProduct = await this.#productRepository.createNewProduct(
      productData
    );
    return productMapper.toDomainModel(newProduct);
  }

  async updateProduct(productId, payload) {
    const { title, price, imageUrl, productUrl } = payload;
    if (!title || !price || !imageUrl || !productUrl) {
      throw new ResponseError(
        'please provide title, price, imageUrl, and productUrl',
        400
      );
    }
    const productData = productMapper.toDataModel(payload);
    const updatedProduct = await this.#productRepository.updateProduct(
      productId,
      productData
    );
    return productMapper.toDomainModel(updatedProduct);
  }

  async deleteProduct(productId) {
    await this.#productRepository.deleteProduct(productId);
  }
}

export default new ProductService();
