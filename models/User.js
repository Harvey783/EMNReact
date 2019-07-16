const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  image: String
});

module.exports = User = mongoose.model('user', userSchema);
