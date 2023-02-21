const express = require('express')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

//@desc Get All Users
//@route GET /api/users
//@access Private
const getUsers = asyncHandler(async (req, res) => {
  if (!User) {
    res.status(404)
    throw new Error('no user Found')
  }
  const users = await User.find()
  res.status(200).json(users)
})

//@desc Create New User
//@route POST /api/users
//@access Public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, userName } = req.body
  // if user details not entered
  if (!name || !email || !userName) {
    res.status(400)
    throw new Error('Kindly add your details in form')
  }
  const user = await User.create({
    name: name,
    email: email,
    userName: userName,
  })
  res.status(201).json(user)
})

//@desc Get Specific User
//@route GET /api/users/:id
//@access Private
const getSingleUser = asyncHandler(async (req, res) => {
  res.send('Get Single User')
})

module.exports = { getUsers, createUser, getSingleUser }
