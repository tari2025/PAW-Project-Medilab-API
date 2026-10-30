const express = require('express');
const router = express.Router();
const { getStatus, getProduk } = require('../controllers/produkController');

router.get('/status', getStatus);
router.get('/produk', getProduk);

module.exports = router;
