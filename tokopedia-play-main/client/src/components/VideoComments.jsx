import { useState } from 'react';
import PropTypes from 'prop-types';
import useComments from '../hooks/useComments';
import CommentForm from './CommentForm';
import { cn } from '../utils';

function VideoComments({ videoId }) {
  const [count, setCount] = useState(0);
  const {
    data: { items: comments },
    loading,
    error,
  } = useComments(videoId, count);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  return (
    <nav className="video__comments">
      <ul className={cn('comments', !comments?.length && 'hidden xl:flex')}>
        {loading ? (
          <li className="sidebar__message">Loading...</li>
        ) : error ? (
          <li className="sidebar__message">Error: {error.message}</li>
        ) : comments.length ? (
          comments.map((comment) => (
            <li className="comment" key={comment.id}>
              <span className="comment__name">{comment.username}:</span>
              <span className="comment__message">{comment.comment}</span>
            </li>
          ))
        ) : (
          <li className="sidebar__message">Comments not found</li>
        )}
      </ul>
      <CommentForm
        videoId={videoId}
        incrementCount={incrementCount}
        comments={comments}
      />
    </nav>
  );
}

VideoComments.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoComments;
