const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book')


router.get('/books', bookController.getindex)

router.get('/books/:id', bookController.getByid)

 router.post('/books', bookController.createnew)

router.put('/books/:id',bookController.updateUser )

 router.delete('/books/:id', bookController.deleteUser )

  module.exports = router