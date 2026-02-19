const express = require('express');
const { crearEntrada, obtenerEntradas, obtenerTotal, actualizarEntrada, eliminarEntrada } = require('../controllers/entradaController');
const router = express.Router();

router.post('/', crearEntrada);
router.get('/', obtenerEntradas)
router.get('/total', obtenerTotal)
router.put('/:id', actualizarEntrada)
router.delete('/:id', eliminarEntrada)

module.exports = router;