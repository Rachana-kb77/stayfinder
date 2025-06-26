import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ListingsList from './components/ListingsList';
import AddListingForm from './components/AddListingForm';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import MyBookings from './components/MyBookings';
import { UserContext } from './context/UserContext';

function App() {
  const [listings, setListings] = useState([]);
  const { user } = useContext(UserContext);

  const fetchListings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/listings');
      setListings(res.data);
    } catch (err) {
      console.error('Error fetching listings:', err);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="App">
      <h1>StayFinder 🏡</h1>
      {user ? <p>Welcome, {user.username}!</p> : <p>Please login</p>}
      <AddListingForm onListingAdded={fetchListings} />
      <RegisterForm onRegisterSuccess={(user) => console.log('User:', user)} />
      <LoginForm onLoginSuccess={(user) => console.log('User:', user)} /> 
      {user && <MyBookings />}
      <h2>All Listings</h2>
      <ListingsList listings={listings} key={listings.length} />
    </div>
  );
}


export default App;




