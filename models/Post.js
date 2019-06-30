const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String },
  avatar: { type: String },
  views: { type: Number, default: 0 },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'Users' }
    }
  ],
  comments: [
    {
      post: { type: Schema.Types.ObjectId, ref: 'Posts' },
      user: { type: Schema.Types.ObjectId, ref: 'Users' },
      text: { type: String, required: true },
      author: { type: String },
      avatar: { type: String },
      created: { type: Date, default: Date.now }
    }
  ]
});

const Post = mongoose.model('Posts', postSchema);
module.exports = Post;
