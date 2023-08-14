import productModel from '../database/model/product.js';

class ProductRepository {
  async getProducts(videoId) {
    const filter = {};
    if (videoId) filter.video = videoId;
    const products = await productModel.find(filter);
    return products;
  }

  async getProductById(productId) {
    const product = await productModel.findById(productId);
    return product;
  }

  async createNewProduct(productData) {
    const newProduct = await productModel.create(productData);
    return newProduct;
  }

  async updateProduct(productId, productData) {
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      { $set: productData },
      { new: true }
    );
    return updatedProduct;
  }

  async deleteProduct(productId) {
    await productModel.findByIdAndDelete(productId);
  }
}

export default new ProductRepository();
