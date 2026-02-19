// config/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configurar Cloudinary manualmente
cloudinary.config({
  cloud_name: 'dgct1ck5y',
  api_key: '788378656232997',
  api_secret: 'BcSNiVL-Oy5F8EpwBW-5bthfCSw',
});

// El storage usa la instancia configurada
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'viaje-2026-buenos-aires',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

module.exports = { cloudinary, storage };
