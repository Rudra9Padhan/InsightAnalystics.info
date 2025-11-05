const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const contactRoutes = require('./routes/contact');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ ok: true, message: 'Contact API' }));
app.use('/api/contact', contactRoutes);

// Not found
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Central error handler
app.use(errorHandler);

module.exports = app;