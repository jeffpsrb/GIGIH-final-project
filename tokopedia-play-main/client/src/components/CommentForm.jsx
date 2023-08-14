import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { cn } from '../utils/index';

function CommentForm({ videoId, incrementCount, comments }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const fomrValidation = {
    required: true,
    validate: {
      trimValue: (username) => username.trim() !== '',
    },
  };

  async function submitComment(data) {
    try {
      const endpoint = `${apiUrl}/api/videos/${videoId}/comments`;
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error(`${err.name}:`, err.message);
    } finally {
      incrementCount();
      reset({ username: '', comment: '' });
    }
  }

  return (
    <form
      className={cn(
        'comment__form',
        comments?.length ? 'pt-2 border-t border-neutral-300' : 'p-0 border-0'
      )}
      onSubmit={handleSubmit(submitComment)}
    >
      <div>
        <label htmlFor="username" className="comment__label">
          Your Name
        </label>
        <input
          id="username"
          type="text"
          className={cn(
            'comment__input',
            errors['username'] && 'border-rose-500'
          )}
          {...register('username', fomrValidation)}
        />
      </div>
      <div>
        <label htmlFor="comment" className="comment__label">
          Message
        </label>
        <textarea
          id="message"
          rows="2"
          className={cn(
            'comment__textarea',
            errors['comment'] && 'border-rose-500'
          )}
          {...register('comment', fomrValidation)}
        ></textarea>
      </div>
      <button className="comment_submit">Submit</button>
    </form>
  );
}

CommentForm.propTypes = {
  videoId: PropTypes.string.isRequired,
  incrementCount: PropTypes.func.isRequired,
  comments: PropTypes.array,
};

export default CommentForm;
