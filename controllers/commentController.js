const express = require('express')
const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')
const Post = require('../models/postModel')

// @desc:  Get All Comments
// @route: GET /api/comments
// @access: Private
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find()
  res.status(200).json(comments)
})

// @desc:  Create Comment
// @route: POST /api/comments
// @access: Private
const createComment = asyncHandler(async (req, res) => {
  const { postId, comment } = req.body
  const created = await Comment.create({ comment: comment })
  const updated = await Post.findByIdAndUpdate(
    postId,
    { $push: { comments: created._id } },
    { new: true }
  )
  res.json(updated)
})

// @desc:  Update Comment
// @route: PUT /api/comments/:id
// @access: Private
const updateComment = asyncHandler(async (req, res) => {
  res.send('Update Comment')
})

// @desc:  Delete Comment
// @route: DELETE /api/comments/:id
// @access: Private
const deleteComment = asyncHandler(async (req, res) => {
  res.send(req.params.id)
})

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
}
