const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true, },
    content: { type: String, required: true, },
    slug: { type: String, required: true },
    keywords: { type: [String], required: true },
    _pid: { type: String, required: true },
    description: { type: String, required: true },
    featured_image: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('Post', postSchema);