// --------DBConfig.js------------//Stored in 'configure' folder
const mongoose = require('mongoose')
const URL =
  'mongodb+srv://bilal5002:gafar123@cluster0.mfmba.mongodb.net/?retryWrites=true&w=majority'

function MyConection() {
  mongoose
    .connect(URL)
    .then(() => {
      console.log('I am Connected')
    })
    .catch(() => {
      console.log('I am Failed')
    })
}

module.exports.MyConection = MyConection
// --------DBConfig.js------------

// --------Comment.js------------// Comment.js and Blog.js stored in 'Model' folder
const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, 'Title Is Required'],
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Comment', Comment)
// --------Comment.js------------

// --------Blog.js------------
const mongoose = require('mongoose')

const Blog = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title Is Required'],
    minLength: [5, '> 5'],
  },

  description: {
    type: String,
    required: [true, 'Description Is Required'],
    minLength: 10,
  },

  createdDate: {
    type: Date,
    default: Date.now(),
  },

  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

module.exports = mongoose.model('Blog', Blog)
// --------Blog.js------------

// --------Server.js------------//Server.js stored in main folder alongside packages.json etc
const exprees = require('express')
const app = exprees()
const mongoose = require('mongoose')
const DBConfig = require('./configure/DBConfig.js')
const Blog = require('./Model/Blog.js')
const Comments = require('./Model/Comment.js')

app.use(exprees.json())

DBConfig.MyConection()

app.get('/blog', async (req, res) => {
  const body = req.body
  console.log(body)
  try {
    const result = await Blog.find().populate('comments')

    res.send(result)
  } catch (e) {
    res.send('Error' + e.message)
  }
})

app.post('/blog', async (req, res) => {
  const body = req.body
  console.log(body) 
  try {
    const result = await Blog.insertMany([body])
    res.send(result)
  } catch (e) {
    res.send('Blog Not Added ' + e.message)
  }
})

app.post('/addcomment', async (req, res) => {
  const { BlogId, Comment } = req.body

  console.log(BlogId + '   ' + Comment)

  const result = await Comments.create({ comment: Comment })

  console.log(result['_id'])

  const blog = await Blog.updateOne(
    { _id: BlogId },
    { $push: { comments: result['_id'] } }
  )

  res.send('Comment Added')
})

app.use('/*', (req, res) => {
  res.status(400).send('Kuch Nhi Ha Yaha Par')
})

app.listen(5000, () => console.log('Server Running'))
// --------Server.js------------

// ------EndofBlogFile---------
