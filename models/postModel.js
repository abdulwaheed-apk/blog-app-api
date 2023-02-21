const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minLength: [5, 'text should be greater than 5 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description text is required'],
      minLength: [10, 'text should be greater than 10 characters'],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', postSchema)
