const express = require('express');
const { createLoveNote, getLoveNotes, getLoveNoteById, updateLoveNote, deleteLoveNote } = require('../controllers/loveNoteController');
const router = express.Router();

router.post('/', createLoveNote)
router.get('/', getLoveNotes)
router.get('/:id', getLoveNoteById)
router.put('/:id', updateLoveNote)
router.delete('/:id', deleteLoveNote)

module.exports = router;