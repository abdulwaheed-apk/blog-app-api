const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
  mongoose.connect(process.env.mongoDBURI, () => {
    console.log('MongoDB Connected'.yellow.inverse)
  })
}

module.exports = connectDB
