const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Post = mongoose.model('Posts');

module.exports = app => {
  app.get('/api/posts', async (req, res) => {
    const posts = await Post.find().sort('-created');
    res.json(posts);
  });

  app.get('/api/posts/:id', async (req, res) => {
    const post = await Post.findById({ _id: req.params.id });
    res.json(post);
  });

  app.post('/api/posts', requireLogin, async (req, res) => {
    // const post = await Post.create({
    //   ...req.body,
    //   user: req.user.id,
    //   author: req.user.userName,
    //   avatar: req.user.image
    // });
    // res.json(post);
    // res.redirect('/');

    const newPost = new Post({
      title: req.body.title,
      text: req.body.text,
      category: req.body.category,
      user: req.user.id,
      author: req.user.userName,
      avatar: req.user.image
    });

    const post = await newPost.save();
    res.json(post);
    res.redirect('/');
  });

  app.delete('/api/posts/:id', requireLogin, async (req, res) => {
    // await Post.findOneAndDelete({ _id: req.params.id });
    // res.json({ msg: 'Target Destroyed' });
    const post = await Post.findById({ _id: req.params.id });
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await post.remove();
    res.json({ msg: 'Target Destroyed' });
  });

  app.put('/api/posts/:id', requireLogin, async (req, res) => {
    const post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json(post);
  });

  app.post('/api/posts/comment/:id', requireLogin, async (req, res) => {
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
  });

  app.put('/api/posts/like/:id', requireLogin, async (req, res) => {
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

  app.put('/api/posts/unlike/:id', requireLogin, async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: 'Post has not been liked' });
    }

    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);
    await post.save();
    res.json(post.likes);
  });
};
