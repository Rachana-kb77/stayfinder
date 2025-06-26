const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  price: Number,
  image: String,
  availableFrom: Date,
  availableTo: Date
});

module.exports = mongoose.model('Listing', listingSchema);
