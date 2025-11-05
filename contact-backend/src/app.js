const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');
const logger = require('./utils/logger');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Error handling
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;