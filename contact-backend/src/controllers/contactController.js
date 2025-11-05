const Contact = require('../models/Contact');

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, companyName, service, message } = req.body;

    const contact = new Contact({ name, email, companyName, service, message });
    await contact.save();

    // Return consistent response expected by frontend/tests
    res.status(201).json({ message: 'Contact created successfully', data: { id: contact._id } });
  } catch (err) {
    next(err);
  }
};

// New: fetch all contacts
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};