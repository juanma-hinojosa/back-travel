// models/Favorite.js
const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    tmdbId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    overview: String,
    posterPath: String,
    releaseDate: String,
    mediaType: {
      type: String, // "movie" o "tv"
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", favoriteSchema);