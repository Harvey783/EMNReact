const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  text: String,
  category: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'Users' }
});

mongoose.model('Posts', postSchema);
