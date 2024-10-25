const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');

// Route untuk produk
router.get('/produk', produkController.index);
router.post('/produk', produkController.create);
router.get('/produk/edit/:id', produkController.edit);
router.post('/produk/update/:id', produkController.update);
router.get('/produk/delete/:id', produkController.delete);

module.exports = router;
