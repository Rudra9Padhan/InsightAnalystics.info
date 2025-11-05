const Contact = require('../models/Contact');

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({ name, email, message });
    await contact.save();

    // placeholder: you can integrate email sending here

    res.status(201).json({ success: true, data: { id: contact._id } });
  } catch (err) {
    next(err);
  }
};