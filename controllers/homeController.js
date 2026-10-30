const { getAllProduk } = require('../models/produkModel');

const renderHome = (req, res) => {
  res.render('index', {
    title: 'Medilab - Healthcare',
    products: getAllProduk()
  });
};

module.exports = { renderHome };
