const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  avatar: { type: String },
  text: { type: String, required: true },
  category: { type: String, required: true },
  comments: [
    {
      post: { type: Schema.Types.ObjectId, ref: 'Posts' },
      user: { type: Schema.Types.ObjectId, ref: 'Users' },
      text: { type: String, required: true },
      author: { type: String },
      avatar: { type: String },
      created: { type: Date, default: Date.now }
    }
  ],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'Users' }
});

const Post = mongoose.model('Posts', postSchema);
module.exports = Post;
