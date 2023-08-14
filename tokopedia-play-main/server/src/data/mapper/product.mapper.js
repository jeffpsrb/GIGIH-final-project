import Product from '../../domain/entities/product.js';

class ProductMapper {
  static toDomainModel(productModel) {
    const { _id: id, title, price, imageUrl, productUrl } = productModel;
    return new Product(id, title, price, imageUrl, productUrl);
  }

  static toDataModel(product) {
    return {
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      productUrl: product.productUrl,
      video: product.videoId,
    };
  }
}

export default ProductMapper;
