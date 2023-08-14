import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cn } from '../utils';
import { useState } from 'react';

function VideoCard({ id, title, description, thumbnailUrl }) {
  const [loading, setLoading] = useState(false);

  return (
    <Link
      to={`/videos/${id}`}
      className={cn(!loading && 'hidden', 'video__card group')}
    >
      <span className="video__card__cover"></span>
      <div className="video__card__data">
        <h4 className="video__card__title">{title}</h4>
        <p className="video__card__description">{description}</p>
      </div>
      <img
        src={thumbnailUrl}
        alt={title}
        className="video__card__image"
        onLoad={() => setLoading(true)}
      />
    </Link>
  );
}

VideoCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};

export default VideoCard;
