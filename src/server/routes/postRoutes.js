import express from 'express';
const router = express.Router();
import { Post, Comment, User } from '../models/sql/user.js';

router.get('/', async (req, res) => {
  const posts = await Post.findAll({
    include: [
      { model: Comment, include: [User] },
      { model: User }
    ]
  });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
});

router.post('/:postId/comments', async (req, res) => {
  const comment = await Comment.create({
    ...req.body,
    postId: req.params.postId
  });
  res.status(201).json(comment);
});

router.post('/:postId/like', async (req, res) => {
  const post = await Post.findByPk(req.params.postId);
  if (post) {
    post.likes += 1;
    await post.save();
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

export default router;