const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const Post = require('../models/Post');
const User = require('../models/User');

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/current-user', (req, res) => {
  if (!req.user) return res.send({});
  res.send(req.user);
});

router.post('/posts', requireLogin, async (req, res) => {
  const user = await User.findById(req.user.id).select('-googleId');

  const newPost = new Post({
    title: req.body.title,
    text: req.body.text,
    category: req.body.category,
    author: user.userName,
    avatar: user.image,
    user: req.user.id
  });

  const post = await newPost.save();
  res.json(post);
});

router.get('/posts', async (req, res) => {
  const posts = await Post.find().sort('-date');
  res.json(posts);
});

router.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ msg: 'Post not found' });
  }
  res.json(post);
});

router.delete('/posts/:id', requireLogin, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ msg: 'Post not found' });
  }
  if (post.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: 'User not authorized' });
  }
  await post.remove();
  res.json({ msg: 'Post removed' });
});

router.put('/posts/like/:id', requireLogin, async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (
    post.likes.filter(like => like.user.toString() === req.user.id).length > 0
  ) {
    return res.status(400).json({ msg: 'Post already liked' });
  }

  post.likes.unshift({ user: req.user.id });
  await post.save();
  res.json(post.likes);
});

router.put('/posts/unlike/:id', requireLogin, async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (
    post.likes.filter(like => like.user.toString() === req.user.id).length === 0
  ) {
    return res.status(400).json({ msg: 'Post has not yet been liked' });
  }

  const removeIndex = post.likes
    .map(like => like.user.toString())
    .indexOf(req.user.id);

  post.likes.splice(removeIndex, 1);
  await post.save();
  res.json(post.likes);
});

router.post('/posts/comment/:id', requireLogin, async (req, res) => {
  const user = await User.findById(req.user.id).select('-googleId');
  const post = await Post.findById(req.params.id);

  const newComment = {
    text: req.body.text,
    author: user.userName,
    avatar: user.image,
    user: req.user.id
  };

  post.comments.unshift(newComment);
  await post.save();
  res.json(post.comments);
});

router.delete(
  '/posts/comment/:id/:comment_id',
  requireLogin,
  async (req, res) => {
    const post = await Post.findById(req.params.id);

    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    const removeIndex = post.comments
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    post.comments.splice(removeIndex, 1);

    await post.save();
    res.json(post.comments);
  }
);

module.exports = app => {
  app.use('/api', router);

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ msg: 'Bad request' });
    }
    next(err);
  });
};
