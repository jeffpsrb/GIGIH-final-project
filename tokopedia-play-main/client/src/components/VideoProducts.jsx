import PropTypes from 'prop-types';
import useProducts from '../hooks/useProducts';
import { cn, formatToCurrency } from '../utils';

function VideoProducts({ videoId }) {
  const {
    data: { items: products },
    loading,
    error,
  } = useProducts(videoId);

  return (
    <nav
      className={cn('video__products', !products?.length && 'hidden xl:block')}
    >
      <ul className="products">
        {loading ? (
          <li className="sidebar__message">Loading...</li>
        ) : error ? (
          <li className="sidebar__message">Error: {error.message}</li>
        ) : products.length ? (
          products.map((product) => (
            <li key={product.id}>
              <a
                href={product.productUrl}
                target="_blank"
                rel="noreferrer"
                className="product"
              >
                <div className="product__image">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full"
                  />
                </div>
                <div className="product__data">
                  <p className="product__title">{product.title}</p>
                  <p className="product__price">
                    {formatToCurrency(product.price)}
                  </p>
                </div>
              </a>
            </li>
          ))
        ) : (
          <li className="sidebar__message">Products not found</li>
        )}
      </ul>
    </nav>
  );
}

VideoProducts.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoProducts;
