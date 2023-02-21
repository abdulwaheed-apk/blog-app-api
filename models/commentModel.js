const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, 'Add Comment Text'],
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('Comment', commentSchema)
