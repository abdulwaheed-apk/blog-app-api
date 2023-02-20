const express = require('express')
const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')

const getComments = asyncHandler(async (req, res) => {
  res.send('Get All Comments')
})

const createComment = asyncHandler(async (req, res) => {
  res.send('Create Comment')
})

const updateComment = asyncHandler(async (req, res) => {
  res.send('Update Comment')
})

const deleteComment = asyncHandler(async (req, res) => {
  res.send(req.params.id)
})

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
}
