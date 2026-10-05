ID Card App
A full-stack MERN application for creating, viewing, updating,
searching, and deleting ID card/user records.
Live Demo
- Frontend: https://id-card-navy-delta.vercel.app/
- Backend API: https://id-card-uj01.onrender.com/
Tech Stack
- Frontend: React.js, React Router, Tailwind CSS, Lucide React
- Backend: Node.js, Express.js, Mongoose, CORS
- Database: MongoDB Atlas
- Deployment: Vercel + Render
Features
- Create user/ID card records
- View all records
- Search users by name
- Update user details
- Delete users
- Responsive UI
- REST API
- MongoDB integration
Project Structure
ID-Card-App/
├── Backend/
│   ├── config/
│   │   └── dbConfig.js
│   ├── controllers/
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoute.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Create.jsx
    │   │   ├── Show.jsx
    │   │   └── Update.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── ...
API Endpoints
Base URL:
https://id-card-uj01.onrender.com/api/cards
  Method   Endpoint           Description
  POST     /api/cards       Create a user
  GET      /api/cards       Get all users
  GET      /api/cards/:id   Get one user
  PATCH    /api/cards/:id   Update a user
  DELETE   /api/cards/:id   Delete a user
Example Request
{
  "name": "Yash",
  "email": "yash@example.com",
  "age": 22
}
Run Locally
Backend
cd Backend
npm install
Create .env:
MONGODB_URL=your_mongodb_connection_string
PORT=5000
Start the server:
node server.js
Frontend
Open another terminal:
cd Frontend
npm install
npm run dev
Production API
The deployed frontend should use the Render backend:
fetch("https://id-card-uj01.onrender.com/api/cards")
instead of:
fetch("http://localhost:5000/api/cards")
Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
Security
Do not commit .env files or database credentials to GitHub.
Author
Yash Kathait
Built as a MERN stack learning project.
