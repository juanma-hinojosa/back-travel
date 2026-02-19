const LoveNote = require('../models/LoveNote');

// Crear
const createLoveNote = async (req, res) => {
  try {
    const loveNote = await LoveNote.create(req.body);
    res.status(201).json(loveNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todass
const getLoveNotes = async (req, res) => {
  try {
    const notes = await LoveNote.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una por ID
const getLoveNoteById = async (req, res) => {
  try {
    const note = await LoveNote.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar
const updateLoveNote = async (req, res) => {
  try {
    const note = await LoveNote.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar
const deleteLoveNote = async (req, res) => {
  try {
    const note = await LoveNote.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }

    res.json({ message: 'Nota eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createLoveNote, deleteLoveNote, updateLoveNote, getLoveNoteById, getLoveNotes
}