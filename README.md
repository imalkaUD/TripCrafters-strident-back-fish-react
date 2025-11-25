# TripCrafters - Full Stack Application

## Project Structure

```
TripCrafters/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── views/              # Page components
│   │   │   ├── home.js
│   │   │   ├── signin.js
│   │   │   ├── signup.js
│   │   │   ├── start-planning.js
│   │   │   ├── destinations.js
│   │   │   ├── tours.js
│   │   │   ├── how-it-works.js
│   │   │   ├── about.js
│   │   │   ├── contact.js
│   │   │   └── not-found.js
│   │   ├── components/
│   │   │   ├── navigation.js
│   │   │   └── footer.js
│   │   ├── index.js            # React Router setup
│   │   ├── style.css           # Global styles
│   │   └── ...
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── craco.config.js
│   ├── .env                    # Frontend env variables
│   └── build/                  # Production build output
│
├── backend/                     # Node.js/Express API server
│   ├── models/                 # Database models
│   │   ├── User.js
│   │   └── TripPlan.js
│   ├── routes/                 # API routes
│   │   ├── auth.js             # Authentication endpoints
│   │   └── tripplans.js        # Trip planning endpoints
│   ├── middleware/
│   │   └── auth.js             # JWT verification
│   ├── server.js               # Express server entry point
│   ├── package.json
│   ├── .env                    # Backend env variables
│   └── ...
│
├── package.json                # Root package.json (monorepo config)
├── FULL_STACK_SETUP.md         # Complete setup guide
├── BACKEND_SETUP.md            # Backend-specific setup
└── README.md
```

## Getting Started

### 1. Install Dependencies

```bash
# Install all dependencies for both frontend and backend
npm run install-all
```

Or install them separately:

```bash
# Frontend dependencies
cd frontend
npm install

# Backend dependencies
cd backend
npm install
```

### 2. Set Up Environment Variables

**Backend (`backend/.env`)**
```
MONGODB_URI=mongodb://localhost:27017/tripcrafters
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

**Frontend (`frontend/.env`)**
```
PORT=3003
REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Start MongoDB

```bash
# Local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
```

### 4. Run Both Frontend and Backend

```bash
# From root directory
npm start
# or
npm run dev
```

This will start:
- Backend on `http://localhost:5000`
- Frontend on `http://localhost:3003`

### 5. Test the Application

- Visit `http://localhost:3003`
- Sign up with a new account
- Fill in the Start Planning form
- Data will be saved to MongoDB

## Folder Organization

### Frontend (`/frontend`)
- **src/views/**: Page components (home, signin, signup, etc.)
- **src/components/**: Reusable components (navigation, footer)
- **src/images/**: Static image assets
- **public/**: HTML and static resources
- **package.json**: React/frontend dependencies
- **.env**: Environment variables for frontend

### Backend (`/backend`)
- **models/**: MongoDB schema definitions (User, TripPlan)
- **routes/**: API endpoint definitions (auth, tripplans)
- **middleware/**: Authentication and other middleware
- **server.js**: Main server file
- **package.json**: Node/backend dependencies
- **.env**: Environment variables for backend

### Root
- **package.json**: Monorepo configuration with scripts
- **FULL_STACK_SETUP.md**: Complete setup guide
- **BACKEND_SETUP.md**: Backend-specific documentation

## Available Scripts

### Root Level
```bash
npm run install-all      # Install all dependencies
npm start               # Start both frontend and backend
npm run start:frontend  # Start only frontend
npm run start:backend   # Start only backend
npm run build          # Build frontend for production
npm run dev            # Start in development mode
npm test               # Run frontend tests
```

### Frontend Commands
```bash
cd frontend
npm start               # Start development server
npm run build          # Build for production
npm test               # Run tests
npm run eject          # Eject from Create React App
```

### Backend Commands
```bash
cd backend
npm run dev            # Start with nodemon (auto-reload)
npm start              # Start server
```

## Features

✅ **Authentication**
- User registration (Sign Up)
- User login (Sign In)
- Password hashing with bcryptjs
- JWT token-based authentication

✅ **Trip Planning**
- 4-step trip planning form
- Save trip details to database
- User-specific data (can only see own trips)

✅ **Pages**
- Home page with hero and features
- Destinations gallery with details
- Tours with itineraries
- How It Works process page
- About company page
- Contact form with FAQs
- Start Planning wizard (protected)

✅ **UI/UX**
- Responsive design (mobile, tablet, desktop)
- Smooth animations
- Consistent design system
- Accessible components

## Technology Stack

### Frontend
- React 17.0.2
- React Router v5
- Craco (for custom CRA config)
- CSS3 with custom properties

### Backend
- Node.js
- Express.js
- MongoDB/Mongoose
- JWT for authentication
- bcryptjs for password hashing

### Database
- MongoDB (local or Atlas)

## Documentation

- **FULL_STACK_SETUP.md** - Complete setup and integration guide
- **BACKEND_SETUP.md** - Backend API documentation
- **This README** - Project structure and quick start

## Deployment

See `FULL_STACK_SETUP.md` for deployment instructions to:
- Heroku, Railway, or Render (Backend)
- Vercel, Netlify, or GitHub Pages (Frontend)
- MongoDB Atlas (Database)

## Support

For issues or questions, refer to:
1. FULL_STACK_SETUP.md - Troubleshooting section
2. BACKEND_SETUP.md - API documentation
3. Check if MongoDB is running
4. Verify environment variables are set correctly
5. Ensure both frontend and backend ports are available

---
<img width="1864" height="885" alt="Screenshot (585)" src="https://github.com/user-attachments/assets/0ca7a33d-8677-494b-8817-913390b4313b" />

<img width="1864" height="888" alt="Screenshot (584)" src="https://github.com/user-attachments/assets/f4805750-4426-4c96-b785-2d8887f5a2bf" />

<img width="1855" height="885" alt="Screenshot (577)" src="https://github.com/user-attachments/assets/515d3bcc-96ab-49cd-86f2-884dba89a5d3" />

<img width="1855" height="886" alt="Screenshot (578)" src="https://github.com/user-attachments/assets/a8bdb242-23aa-4b87-9a08-9651edd9bce8" />

<img width="1831" height="877" alt="Screenshot (581)" src="https://github.com/user-attachments/assets/648546f7-126c-4ec6-98b4-073ecf9b7cfb" />

<img width="1837" height="871" alt="Screenshot (579)" src="https://github.com/user-attachments/assets/10f341f0-812f-4d5b-81a0-d32c9ed54157" />

<img width="1851" height="885" alt="Screenshot (580)" src="https://github.com/user-attachments/assets/41c067f2-840b-4510-8f36-9ada7bd0193d" />


**Last Updated:** November 25, 2025
**Status:** ✅ Ready for development and deployment

