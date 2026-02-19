// const DateModel = require('../models/Date');
// // const { cloudinary } = require('../config/cloudinary');

// // Crear Date
// exports.createDate = async (req, res) => {
//   try {
//     let fotoUrl = '';

//     if (req.file) {
//       fotoUrl = req.file.path; // Cloudinary URL
//     }

//     const newDate = await DateModel.create({
//       lugar: req.body.lugar,
//       // fecha: req.body.fecha,
//       nota: req.body.nota,
//       foto: fotoUrl,
//     });

//     res.status(201).json(newDate);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Obtener todos
// exports.getDates = async (req, res) => {
//   try {
//     const dates = await DateModel.find().sort({ fecha: -1 });
//     res.json(dates);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Obtener uno
// exports.getDateById = async (req, res) => {
//   try {
//     const date = await DateModel.findById(req.params.id);

//     if (!date) {
//       return res.status(404).json({ message: 'Date no encontrado' });
//     }

//     res.json(date);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Actualizar
// exports.updateDate = async (req, res) => {
//   try {
//     let updateData = { ...req.body };

//     if (req.file) {
//       updateData.foto = req.file.path;
//     }

//     const updatedDate = await DateModel.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     if (!updatedDate) {
//       return res.status(404).json({ message: 'Date no encontrado' });
//     }

//     res.json(updatedDate);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Eliminar
// exports.deleteDate = async (req, res) => {
//   try {
//     const date = await DateModel.findByIdAndDelete(req.params.id);

//     if (!date) {
//       return res.status(404).json({ message: 'Date no encontrado' });
//     }

//     res.json({ message: 'Date eliminado correctamente' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
