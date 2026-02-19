const allowedOrigins = [
  "http://localhost:5173",          // Vite local
  // "https://consultoriosanmarcos.com",         // dominio de producción
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir peticiones sin origin (como Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};  

module.exports = corsOptions;
