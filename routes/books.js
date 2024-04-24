const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const sharpMulter = require('../middleware/sharp-multer-config');

const booksCtrl = require('../controllers/books');

router.get('/bestrating', booksCtrl.getBestrating);
router.get('/', booksCtrl.getAllBooks);
router.get('/:id', booksCtrl.getOneBook);
router.post('/', auth, sharpMulter, booksCtrl.createBook);
router.put('/:id', auth, sharpMulter, booksCtrl.modifyBook);
router.post('/:id/rating', auth, booksCtrl.createRating);
router.delete('/:id', auth, booksCtrl.deleteBook);

module.exports = router;
