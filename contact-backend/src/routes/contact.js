const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactController');
const validateRequest = require('../middlewares/validateRequest');

router.post('/', validateRequest, createContact);

module.exports = router;