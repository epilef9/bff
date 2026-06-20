const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config/config');

const BACKEND_URL = config.BACKEND_URL;

// GET todos
router.get('/', async (req, res, next) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/usuarios`);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});
// GET por email (debe ir antes de /:id para que Express no lo confunda)
router.get('/email/:email', async (req, res, next) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/usuarios/email/${req.params.email}`);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

// GET por ID
router.get('/:id', async (req, res, next) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/usuarios/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

// POST crear
router.post('/', async (req, res, next) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/usuarios`, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
});

// PUT actualizar
router.put('/:id', async (req, res, next) => {
    try {
        const response = await axios.put(`${BACKEND_URL}/api/usuarios/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        await axios.delete(`${BACKEND_URL}/api/usuarios/${req.params.id}`);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

module.exports = router;