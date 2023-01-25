const Router = require('express')
const router = new Router()
const bookController = require('../controllers/book.controller')

router.post('/book', bookController.markBook)
router.get('/book', bookController.getBooksByUser)

module.exports = router