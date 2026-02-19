const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./config/db');
const entradaRoutes = require('./routes/entradaRoutes')
const corsOptions = require('./config/cors');

dotenv.config()
connectDB();

const app = express();
app.use(cors(corsOptions))

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Temporizador de Rafa Funcionando.");
});

app.use('/api/entradas', entradaRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT} 🚀`);
});