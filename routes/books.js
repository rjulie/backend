const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const sharpMulter = require('../middleware/sharp-multer-config');

const booksCtrl = require('../controllers/books');

router.post('/', auth, sharpMulter, booksCtrl.createBook);
router.put('/:id', auth, sharpMulter, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.get('/:id', booksCtrl.getOneBook);
router.get('/', booksCtrl.getAllBooks);

module.exports = router;
