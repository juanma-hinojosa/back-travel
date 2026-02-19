const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema(
  {
    lugar: {
      type: String,
      required: true,
      trim: true,
    },
    foto: {
      type: String, // URL de Cloudinary
    },
    nota: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Date', dateSchema);
