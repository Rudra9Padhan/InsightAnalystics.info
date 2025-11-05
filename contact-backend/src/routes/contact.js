const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');
const validateRequest = require('../middlewares/validateRequest');

// Create contact
router.post('/', validateRequest, createContact);

// Get all contacts (used by the frontend)
router.get('/', getContacts);

module.exports = router;