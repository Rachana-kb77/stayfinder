1. StayFinder — Airbnb Clone

StayFinder is a full-stack web application inspired by Airbnb, allowing users to register, log in, view listings, and book stays.


2. Live Demo

🔗 Frontend: [https://stayfinder-frontend.vercel.app](https://stayfinder-frontend.vercel.app)  
🔗 Backend: [https://stayfinder-backend-s4xl.onrender.com](https://stayfinder-backend-s4xl.onrender.com)


3. Features

• Authentication
- User registration and login (JWT-based)

• Listings
- View available property listings
- Create new listings

• Bookings
- Book a stay
- View booking history

---

4. Tech Stack

| Frontend        | Backend       | Database       | Deployment        |
|-----------------|---------------|----------------|-------------------|
| React.js        | Node.js       | MongoDB Atlas  | Vercel (Frontend) |
| React Router    | Express.js    | Mongoose       | Render (Backend)  |
| Axios, CSS      | CORS, dotenv  |                |                   |

---

5. Folder Structure

stayfinder/
├── client/ # Frontend (React)
│ └── src/
│ └── components/
├── server/ # Backend (Express)
│ └── routes/
│ └── index.js

⚙️ Setup Instructions:

1. Clone the Repo

git clone https://github.com/Rachana-kb77/stayfinder.git
cd stayfinder

2. Install Dependencies

cd client
npm install
cd ../server
npm install

3. Configure Environment Variables
Create a .env file in /server:
.env

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key

4. Run the App Locally

# In one terminal
cd server
npm start

# In another terminal
cd client
npm start

