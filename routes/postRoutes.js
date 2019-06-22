const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Post = mongoose.model('Posts');

module.exports = app => {
  app.get('/api/posts', async (req, res) => {
    const posts = await Post.find().sort('-created');
    res.send(posts);
  });

  app.post('/api/posts', requireLogin, async (req, res) => {
    const post = await Post.create({ ...req.body, user: req.user.id });
    res.send(post);
  });
};
