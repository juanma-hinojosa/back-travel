// routes/favoriteRoutes.js
const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

// POST /api/favorites
router.post("/", favoriteController.createFavorite);

// GET /api/favorites
router.get("/", favoriteController.getFavorites);

// DELETE /api/favorites/:id
router.delete("/:id", favoriteController.deleteFavorite);

module.exports = router;