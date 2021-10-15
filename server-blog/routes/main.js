const express = require('express');
const createPost = require('../controllers/post-controller').createPost;
const getAllPost = require('../controllers/post-controller').getAllPost;
const updatePost = require('../controllers/post-controller').updatePost;
const deletePost = require('../controllers/post-controller').deletePost;
const getPostBySlug = require('../controllers/post-controller').getPostBySlug;
const getPostsByTag = require('../controllers/post-controller').getPostsByTag;
const getAllTag = require('../controllers/post-controller').getAllTag;

const router = express.Router();
router.post('/posts', createPost);
router.get('/posts', getAllPost);
router.get('/posts/:postSlug', getPostBySlug);
router.patch('/posts/:postId', updatePost);
router.delete('/posts/:postId', deletePost);
router.get('/tags/:tagSlug', getPostsByTag);
router.get('/tags', getAllTag);

module.exports = router;