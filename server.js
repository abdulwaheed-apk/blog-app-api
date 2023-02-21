const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnect')

const app = express()
connectDB()

app.get('/', (req, res) => {
  res.send('Hello')
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', require('./routes/postsRoute'))
app.use('/api/comments', require('./routes/commentsRoute'))
app.use('/api/users', require('./routes/usersRoute'))

// console.log(process.env.mongoDBURI)
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`.cyan.underline)
})
