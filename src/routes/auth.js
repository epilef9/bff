const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config/config');

// POST login
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        // Llamar al backend
        const response = await axios.post(
            `${config.BACKEND_URL}/api/auth/login`,
            { email, password }
        );
        
        // Devolver respuesta del backend
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

// POST register
router.post('/register', async (req, res, next) => {
    try {
        const { nombre, email, password, telefono, rol } = req.body;
        
        // Llamar al backend
        const response = await axios.post(
            `${config.BACKEND_URL}/api/auth/register`,
            { nombre, email, password, telefono, rol }
        );
        
        // Devolver respuesta del backend
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;