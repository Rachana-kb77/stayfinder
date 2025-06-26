// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();

// const authRoutes = require('./routes/auth');
// const listingRoutes = require('./routes/listings');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/stayfinder')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB error:', err));

// app.use('/api/auth', authRoutes);
// app.use('/listings', listingRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const listingRoutes = require('./routes/listings'); // ✅ this can be here or at bottom

dotenv.config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/stayfinder')
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('MongoDB error:', err));

app.use('/auth', authRoutes); // 🧑‍💻 For register/login
app.use('/listings', listingRoutes); // 🏘️ For listings — GET, POST etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const bookingRoutes = require('./routes/bookings');
app.use('/bookings', bookingRoutes);










/*
What it does:
Main entry point for the backend server.

Why it’s important:
Sets up:

Express server

MongoDB connection

Parses JSON

Adds CORS

Mounts routes (/api/auth)
*/
