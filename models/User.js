const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  image: String
});

const User = mongoose.model('Users', userSchema);
module.exports = User;
