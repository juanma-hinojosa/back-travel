const cloudinary = require("cloudinary").v2;
const multerStorageCloudinary = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dgct1ck5y",
  api_key: "788378656232997",
  api_secret: "BcSNiVL-Oy5F8EpwBW-5bthfCSw",
});

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "viaje-2026-buenos-aires",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

module.exports = { cloudinary, storage };
