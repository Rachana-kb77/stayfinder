const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  listing: { type: Schema.Types.ObjectId, ref: 'Listing', required: true },
  date: { type: String, required: true }, // or use Date type if needed
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
