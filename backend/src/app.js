const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require("./routes/userRoutes");
const businessRoutes = require("./routes/businessRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/business', businessRoutes); 

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Error handler
app.use(errorHandler);

module.exports = app;
