// controllers/favoriteController.js
const Favorite = require("../models/Favorites");

// Crear favorito
exports.createFavorite = async (req, res) => {
  try {
    const { tmdbId, title, overview, posterPath, releaseDate, mediaType } =
      req.body;

    // Evitar duplicados
    const existing = await Favorite.findOne({ tmdbId });
    if (existing) {
      return res.status(400).json({ message: "Ya está en favoritos" });
    }

    const favorite = new Favorite({  
      tmdbId,
      title,
      overview,
      posterPath,
      releaseDate,
      mediaType,
    });

    await favorite.save();

    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: "Error al guardar favorito", error });
  }
};

// Obtener todos los favoritos
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find().sort({ createdAt: -1 });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener favoritos", error });
  }
};

// Eliminar favorito
exports.deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Favorite.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Favorito no encontrado" });
    }

    res.json({ message: "Favorito eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar favorito", error });
  }
};