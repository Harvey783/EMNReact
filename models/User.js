const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  image: String
});

mongoose.model('users', userSchema);
