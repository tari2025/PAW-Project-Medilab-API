// Model: sumber data produk (sementara menggunakan array statis).
const produk = [
  {
    id: 1,
    nama: 'Vitamin C 500 mg',
    kategori: 'Vitamin',
    harga: 35000,
    deskripsi: 'Suplemen vitamin C untuk membantu menjaga daya tahan tubuh.'
  },
  {
    id: 2,
    nama: 'Masker Medis',
    kategori: 'Alat Kesehatan',
    harga: 18000,
    deskripsi: 'Masker medis untuk membantu melindungi saluran pernapasan.'
  },
  {
    id: 3,
    nama: 'Hand Sanitizer 100 ml',
    kategori: 'Kebersihan',
    harga: 22000,
    deskripsi: 'Pembersih tangan praktis untuk penggunaan sehari-hari.'
  },
  {
    id: 4,
    nama: 'Termometer Digital',
    kategori: 'Alat Kesehatan',
    harga: 65000,
    deskripsi: 'Alat untuk mengukur suhu tubuh secara digital.'
  }
];

const getAllProduk = () => produk;

module.exports = { getAllProduk };
