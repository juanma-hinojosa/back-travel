const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./config/db');
const corsOptions = require('./config/cors');

const entradaRoutes = require('./routes/entradaRoutes')
const loveNoteRoutes = require('./routes/loveNoteRoutes');
const dateRoutes = require('./routes/dateRoutes');

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
app.use('/api/dates', dateRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT} 🚀`);
});