const { getAllProduk } = require('../models/produkModel');

const getStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server berjalan dengan baik',
    app: 'Medilab',
    status: 'online',
    timestamp: new Date().toISOString()
  });
};

const getProduk = (req, res) => {
  res.status(200).json({
    success: true,
    total: getAllProduk().length,
    data: getAllProduk()
  });
};

module.exports = { getStatus, getProduk };
