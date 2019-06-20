const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Post = mongoose.model('Posts');

module.exports = app => {
  app.get('/api/posts', requireLogin, async (req, res) => {
    const posts = await Post.find({ user: req.user.id });

    res.send(posts);
  });
};
