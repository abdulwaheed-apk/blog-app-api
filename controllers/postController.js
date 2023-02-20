const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

// @desc Get All Posts
// @method GET
// @access Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()
  res.status(200).json(posts)
})

// @desc Create Post
// @method POST
// @access Private
const createPost = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400).send('To Create Post Kindly Add Title and Description')
  }
  // const body = req.body
  const post = await Post.create(req.body)
  res.status(200).json(post)
})

// @desc update Post
// @method PUT
// @access Private
const updatePost = asyncHandler(async (req, res) => {
  // const post = await Post.findById(req.params.id)
  // console.log(post)

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  console.log(updatedPost)
  res.status(200).json(updatedPost)
})

// @desc delete Post
// @method DELETE
// @access Private
const deletePost = asyncHandler(async (req, res) => {
  res.send('Delete Post')
})

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
}
