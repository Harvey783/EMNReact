const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Post = mongoose.model('Posts');

module.exports = app => {
  app.get('/api/posts', async (req, res) => {
    const posts = await Post.find().sort('-created');
    res.send(posts);
  });

  app.post('/api/posts', requireLogin, async (req, res) => {
    const post = await Post.create({
      ...req.body,
      user: req.user.id,
      author: req.user.userName,
      avatar: req.user.image
    });
    res.send(post);
  });

  app.delete('/api/posts/:id', requireLogin, async (req, res) => {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: 'Target Destroyed' });
  });

  app.put('/api/posts/:id', requireLogin, async (req, res) => {
    const post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.send(post);
  });

  app.post('/api/posts/:id/comments', requireLogin, async (req, res) => {
    // const user = await User.findById({ _id: req.params.id });
    const post = await Post.findById({ _id: req.params.id });

    const newComment = {
      text: req.body.text,
      user: req.user.id,
      author: req.user.userName,
      avatar: req.user.image,
      post: req.params.id
    };

    post.comments.unshift(newComment);
    await post.save();
    res.json(post);
    // res.json(post.comments)
  });
};
