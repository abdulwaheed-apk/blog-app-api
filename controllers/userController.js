const express = require('express')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc Get All Users
//@route GET /api/users
//@access Private
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get Users')
})

//@desc Create New User
//@route POST /api/users
//@access Public
const createUser = asyncHandler(async (req, res) => {
  res.send('Create User')
})

//@desc Get Specific User
//@route GET /api/users/:id
//@access Private
const getSingleUser = asyncHandler(async (req, res) => {
  res.send('Get Single User')
})

module.exports = { getUsers, createUser, getSingleUser }
