const mongoose = require('mongoose');

const loveNoteSchema = new mongoose.Schema(
  {
    de: {
      type: String,
      required: true,
      trim: true,
    },
    para: {
      type: String,
      required: true,
      trim: true,
    },
    nota: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('LoveNote', loveNoteSchema);
