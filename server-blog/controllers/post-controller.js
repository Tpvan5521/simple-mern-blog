const mongoose = require('mongoose');
const Post = require('../models/post-model');
function createPost(req, res) {
    const post = new Post({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        slug: req.body.slug,
        description: req.body.description,
        keywords: req.body.keywords,
        tags: req.body.tags,
        featured_image: req.body.featured_image,
        _pid: req.body._pid
    });
    return post
        .save()
        .then((newPost) => {
            return res.status(201).json({
                success: true,
                message: 'New post created successfully',
                data: newPost,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}
function getAllPost(req, res) {
    Post.find()
        .select('_id title slug description content keywords _pid tags featured_image created_at updated_at')
        .then((allPost) => {
            Post.distinct("tags").exec((res) => {
                console.log(res)
            });
            return res.status(200).json({
                success: true,
                message: 'A list of all post',
                data: allPost,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}
function getPostBySlug(req, res) {
    const slug = req.params.postSlug;
    Post.findOne({ slug: slug })
        .then((singlePost) => {
            res.status(200).json({
                success: true,
                message: `More on ${singlePost.title}`,
                data: singlePost,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'This post does not exist',
                error: err.message,
            });
        });
}
function updatePost(req, res) {
    const id = req.params.postSlug;
    const updateObject = req.body;
    Post.update({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Post is updated',
                updatePost: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
            });
        });
}
function deletePost(req, res) {
    const id = req.params.postSlug;
    Post.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(204).json({
            success: true,
        }))
        .catch((err) => res.status(500).json({
            success: false,
        }));
}
function getPostsByTag(req, res) {
    const tag = req.params.tagSlug;
    Post.find({
        tags: {
            $in: [new RegExp('^' + tag + '$', 'gmi')]
        }
    })
        .then((posts) => {
            res.status(200).json({
                success: true,
                message: `A list of tag ${tag}`,
                tag_name: tag,
                data: posts,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'No post exist for this tag',
                error: err.message,
            });
        });
}
const getAllTag = async (req, res) => {
    try {
        const allTags = await Post.distinct('tags');
        res.json({
            data: allTags
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ details: error });
    }
}

module.exports = {
    createPost,
    getAllPost,
    updatePost,
    deletePost,
    getPostBySlug,
    getPostsByTag,
    getAllTag
}