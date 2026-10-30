# PAW-Project-Medilab

Project Week 7: Integrasi Frontend, REST API, dan Middleware Logger.

## Teknologi
- Node.js dan Express.js
- EJS sebagai view engine
- Bootstrap 5 melalui CDN
- Arsitektur Model-View-Controller (MVC)
- Middleware logger

## Cara menjalankan
1. Pastikan Node.js sudah terpasang.
2. Buka terminal pada folder project.
3. Jalankan `npm install`.
4. Jalankan `npm run dev` (atau `npm start`).
5. Buka `http://localhost:3000`.

## Endpoint API
- `GET http://localhost:3000/api/status`
- `GET http://localhost:3000/api/produk`

## Logger
Setiap request dicatat pada terminal dan disimpan ke `logs/logger.md`.

## Catatan
Data produk masih menggunakan array statis pada `models/produkModel.js`, sesuai ketentuan tugas yang tidak mewajibkan database.
