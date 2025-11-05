const express = require('express');
const ContactController = require('../controllers/contactController');

const router = express.Router();
const contactController = new ContactController();

router.post('/contacts', contactController.createContact.bind(contactController));
router.get('/contacts', contactController.getContacts.bind(contactController));

module.exports = router;