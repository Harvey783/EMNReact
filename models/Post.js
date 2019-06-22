const mongoose = require('mongoose');
const commentSchema = require('./Comment');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  text: String,
  category: String,
  vote: { type: Number, default: 0 },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  comments: { commentSchema }
});

mongoose.model('Posts', postSchema);
