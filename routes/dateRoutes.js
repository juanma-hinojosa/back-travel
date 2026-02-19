const express = require('express');
const upload = require('../config/upload');
const { createDate, getDates, getDateById, updateDate, deleteDate } = require('../controllers/dateController');
const router = express.Router();
// const upload = require('../middlewares/upload');

router.post('/', upload.single('foto'), createDate);
router.get('/', getDates)
router.get('/:id', getDateById)
router.put('/:id', upload.single('foto'), updateDate)
router.delete('/:id', deleteDate)

module.exports = router;