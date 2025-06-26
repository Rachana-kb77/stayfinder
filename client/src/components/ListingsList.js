// client/src/components/ListingsList.js

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const ListingsList = () => {
  const [listings, setListings] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:5000/listings')
      .then(res => {
        console.log('Fetched listings:', res.data); 
        setListings(res.data);
      })
      .catch(err => {
        console.error('Error fetching listings:', err);
      });
  }, []);

  const handleBookNow = async (listingId) => {
    if (!user) {
      alert('Please login to book a listing.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/bookings', {
        userId: user.id,
        listingId,
        date: new Date().toISOString().split('T')[0]  // format: YYYY-MM-DD
      });
      alert('Booking successful!');
    } catch (err) {
      console.error('Booking failed:', err);
      alert('Failed to book this listing.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Listings</h2>
      {listings.length === 0 ? (
        <p>No listings yet.</p>
      ) : (
        <ul>
          {listings.map((listing) => (
            <li key={listing._id} style={{ marginBottom: '1rem' }}>
              <strong>{listing.title}</strong> — {listing.location} — ₹{listing.price}
              {user && (
                <button
                  onClick={() => handleBookNow(listing._id)}
                  style={{ marginLeft: '1rem', padding: '5px 10px' }}
                >
                  Book Now
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListingsList;
