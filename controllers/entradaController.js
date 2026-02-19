const Entrada = require('../models/Entrada')

const crearEntrada = async (req, res) => {
  try {
    const { numero } = req.body;

    const nuevaEntrada = new Entrada({ numero });
    await nuevaEntrada.save();

    res.status(201).json(nuevaEntrada);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

const obtenerEntradas = async (req, res) => {
  try {
    const entradas = (await Entrada.find()).toSorted({ createdAt: -1 });
    res.json(entradas);
  } catch (error) {
    res.status(500).json({ mensaje: error.message })
  }
};

const obtenerTotal = async (req, res) => {
  try {
    const resultado = await Entrada.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$numero" }
        }
      }
    ]);

    const total = resultado[0]?.total || 0;

    res.json({ total });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

const actualizarEntrada = async (req, res) => {
  try {
    const { id } = req.params;
    const { numero } = req.body;

    const entradaActualizada = await Entrada.findByIdAndUpdate(
      id,
      { numero },
      { new: true }
    );

    res.json(entradaActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

const eliminarEntrada = async (req, res) => {
  try {
    const { id } = req.params;

    await Entrada.findByIdAndDelete(id);

    res.json({ mensaje: "Entrada eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

module.exports = {
  crearEntrada,
  obtenerEntradas,
  obtenerTotal,
  actualizarEntrada,
  eliminarEntrada
}