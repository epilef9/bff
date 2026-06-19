const express = require('express');
const corsMiddleware = require('./middleware/cors');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config/config');

// Importar rutas
const authRoutes = require('./routes/auth');
const usuariosRoutes = require('./routes/usuarios');
const serviciosRoutes = require('./routes/servicios');
const turnosRoutes = require('./routes/turnos');

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/servicios', serviciosRoutes);
app.use('/api/turnos', turnosRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'BFF is running' });
});

// Error handler
app.use(errorHandler);

// Iniciar servidor
app.listen(config.BFF_PORT, () => {
    console.log(`✅ BFF corriendo en http://localhost:${config.BFF_PORT}`);
    console.log(`📡 Backend URL: ${config.BACKEND_URL}`);
});

module.exports = app;