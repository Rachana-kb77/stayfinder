import React, { useState } from 'react';
import axios from 'axios';

const AddListingForm = ({ onListingAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    price: '',
    image: '',
    availableFrom: '',
    availableTo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/listings', formData);
      onListingAdded(); // refresh listing list
      setFormData({ // reset form
        title: '',
        location: '',
        description: '',
        price: '',
        image: '',
        availableFrom: '',
        availableTo: '',
      });
    } catch (err) {
      console.error('Error adding listing:', err);
    }
  };

  return (
    <div>
      <h2>Add New Listing 🏠</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <input name="availableFrom" type="date" value={formData.availableFrom} onChange={handleChange} required />
        <input name="availableTo" type="date" value={formData.availableTo} onChange={handleChange} required />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListingForm;
