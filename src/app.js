const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();


app.get('/', (req, res) => {
  res.send("Hello!!");
});


// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', postRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;