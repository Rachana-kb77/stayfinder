// // src/components/LoginForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       console.log('User:', res.data.user);
//       alert("Login successful!");
//     } catch (err) {
//       console.error('Login failed:', err.response?.data?.message || err.message);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         /><br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         /><br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';


function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      alert("Login successful!");
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email"
          value={formData.email} onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password"
          value={formData.password} onChange={handleChange} required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

