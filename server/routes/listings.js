// server/routes/listings.js
const express = require('express');
const router = express.Router();
const Listing = require('../models/listings');

// GET all listings
router.get('/', async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

// POST /listings - Create new listing
router.post('/', async (req, res) => {
  try {
    const { title, location, description, price, image, availableFrom, availableTo } = req.body;

    const newListing = new Listing({
      title,
      location,
      description,
      price,
      image,
      availableFrom,
      availableTo,
    });

    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
