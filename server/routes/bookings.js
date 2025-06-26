const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// POST /bookings - Create a new booking
router.post('/', async (req, res) => {
  try {
    const { userId, listingId, date } = req.body;

    if (!userId || !listingId || !date) {
      return res.status(400).json({ error: 'Missing booking data' });
    }

    const booking = new Booking({ user: userId, listing: listingId, date });
    const saved = await booking.save();

    res.status(201).json(saved);
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Server error during booking' });
  }
});

// GET /bookings?userId=USER_ID
// router.get('/', async (req, res) => {
//   try {
//     const { userId } = req.query;
//     if (!userId) return res.status(400).json({ error: 'User ID is required' });

//     const bookings = await Booking.find({ userId }).populate('listingId');
    
//     // Map listingId to "listing" in the response
//     const formatted = bookings.map(b => ({
//       ...b.toObject(),
//       listing: b.listingId
//     }));

//     res.status(200).json(formatted);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    console.log("📌 GET /bookings?userId=", userId); // Log incoming request

    const bookings = await Booking.find({ user: userId })
      .populate('listing'); // ensure field name matches your DB

    console.log("✅ Found bookings:", bookings); // See fetched data
    res.status(200).json(bookings);
  } catch (err) {
    console.error("❌ Booking fetch error:", err.message);
    res.status(500).json({ error: 'Server error' });
  }
});




module.exports = router;
