const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  title: { type: String, required: true },
  text: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String },
  avatar: { type: String },
  likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'users' }
    }
  ],
  comments: [
    {
      post: { type: Schema.Types.ObjectId, ref: 'post' },
      user: { type: Schema.Types.ObjectId, ref: 'users' },
      text: { type: String, required: true },
      author: { type: String },
      avatar: { type: String },
      date: { type: Date, default: Date.now }
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = Post = mongoose.model('post', postSchema);
