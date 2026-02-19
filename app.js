const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const entradaRoutes = require('./routes/entradaRoutes')

dotenv.config()

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Temporizador de Rafa Funcionando.");
});

app.use('/api/entradas', entradaRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT} 🚀`);
});