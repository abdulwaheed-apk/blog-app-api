const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name Field is required'],
  },
  email: {
    type: String,
    required: [true, 'Email Field is required'],
    unique: true,
  },
  userName: {
    type: String,
    required: [true, 'Username Field is required'],
    unique: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

module.exports = mongoose.model('User', userSchema)
