const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: String,
  vote: { type: Number, default: 0 },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  post: { type: Schema.Types.ObjectId, ref: 'Posts' }
});

mongoose.model('Comments', commentSchema);
