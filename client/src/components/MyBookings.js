// components/MyBookings.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        console.log("Fetching bookings for user:", user?.id);
        const res = await axios.get(`http://localhost:5000/bookings?userId=${user.id}`);
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      }
    };

    if (user) fetchBookings();
  }, [user]);

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
          <li key={booking._id}>
          <strong>{booking.listing?.title}</strong> in {booking.listing?.location} on{' '}
          {new Date(booking.date).toLocaleDateString()}
        </li>
       ))}
        </ul>
      )}
    </div>
  );
}

export default MyBookings;


