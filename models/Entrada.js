const mongoose = require('mongoose')

const EntradaSchema = new mongoose.Schema({
  numero: {
    type: Number,
    require: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Entrada', EntradaSchema);