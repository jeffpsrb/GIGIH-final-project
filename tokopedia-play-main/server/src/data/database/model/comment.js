import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Comment', commentSchema);
