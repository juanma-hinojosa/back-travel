const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./config/db');
const corsOptions = require('./config/cors');

const entradaRoutes = require('./routes/entradaRoutes')
const loveNoteRoutes = require('./routes/loveNoteRoutes');
// const dateRoutes = require('./routes/dateRoutes');
const favoriteRoutes = require("./routes/favoriteRoutes");

dotenv.config()
connectDB();

const app = express();
app.use(cors(corsOptions))

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Temporizador de Rafa Funcionando.");
});

app.use('/api/entradas', entradaRoutes)
app.use('/api/love-notes', loveNoteRoutes)
// app.use('/api/dates', dateRoutes)
app.use('/api/favorites', favoriteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT} 🚀`);
});