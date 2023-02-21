const express = require('express')
const router = express.Router()
const {
  getUsers,
  createUser,
  getSingleUser,
} = require('../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getSingleUser)

module.exports = router
