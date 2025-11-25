# TripCrafters Project Structure Guide

## 📁 Folder Organization

Your TripCrafters project is now organized as a **monorepo** with clear separation between frontend and backend.

### Root Directory (`/`)
```
TripCrafters/
├── frontend/                    ← All React frontend code
├── backend/                     ← All Node.js/Express API code
├── package.json                 ← Root monorepo config
├── README.md                    ← Project overview
├── FULL_STACK_SETUP.md         ← Complete setup guide
├── BACKEND_SETUP.md            ← Backend API docs
└── PROJECT_STRUCTURE.md         ← This file
```

---

## 📱 Frontend Folder Structure

### `/frontend`
All React application code and assets.

```
frontend/
├── src/                         ← Source code
│   ├── views/                  ← Page components
│   │   ├── home.js             ← Home page with hero & features
│   │   ├── signin.js           ← User login page
│   │   ├── signup.js           ← User registration page
│   │   ├── start-planning.js   ← 4-step trip planning form (protected)
│   │   ├── destinations.js     ← Destinations grid & details
│   │   ├── tours.js            ← Tours gallery & details
│   │   ├── how-it-works.js     ← Process explanation
│   │   ├── about.js            ← Company info
│   │   ├── contact.js          ← Contact form
│   │   ├── not-found.js        ← 404 page
│   │   ├── home.css
│   │   ├── signin.css
│   │   ├── signup.css
│   │   ├── start-planning.css
│   │   ├── destinations.css
│   │   ├── tours.css
│   │   ├── how-it-works.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   └── not-found.css
│   │
│   ├── components/             ← Reusable components
│   │   ├── navigation.js       ← Top navbar with auth links
│   │   ├── navigation.css
│   │   ├── footer.js           ← Footer component
│   │   └── footer.css
|   |
│   ├── index.js                ← React Router setup & entry point
│   ├── style.css               ← Global styles & CSS variables
│   └── ...
│
├── public/                      ← Static HTML & assets
│   ├── index.html
│   ├── favicon.ico
│   └── ...
│
├── build/                       ← Production build output (generated)
├── locales/                     ← Translation files
│   └── en.json
│
├── package.json                 ← Frontend dependencies
├── package-lock.json
├── craco.config.js             ← Create React App custom config
├── .env                        ← Environment variables
├── .gitignore
└── README.md                   ← Frontend-specific README
```

### Frontend File Purposes

| File | Purpose |
|------|---------|
| `index.js` | React Router configuration - defines all routes (/home, /signin, /signup, etc.) |
| `style.css` | Global CSS with custom properties (colors, fonts, spacing) |
| `views/` | Page components - each page is a separate React component |
| `components/` | Reusable components used across multiple pages |
| `public/` | Static files served directly (HTML, favicon, etc.) |
| `.env` | Environment variables (PORT=3003, API URL) |
| `craco.config.js` | Custom Create React App configuration |

---

## 🖥️ Backend Folder Structure

### `/backend`
All Node.js/Express API code and database models.

```
backend/
├── models/                      ← MongoDB schema definitions
│   ├── User.js                 ← User model (email, password, name)
│   └── TripPlan.js             ← Trip plan model (linked to user)
│
├── routes/                      ← API endpoint handlers
│   ├── auth.js                 ← POST /api/auth/signup, signin
│   └── tripplans.js            ← CRUD for /api/tripplans
│
├── middleware/                  ← Custom middleware
│   └── auth.js                 ← JWT token verification
│
├── server.js                    ← Main Express server file
├── package.json                 ← Backend dependencies (express, mongodb, jwt, etc.)
├── .env                        ← Environment variables
└── README.md                   ← Backend-specific README
```

### Backend File Purposes

| File | Purpose |
|------|---------|
| `server.js` | Main server entry point - sets up Express, MongoDB, routes |
| `models/User.js` | MongoDB schema for users with password hashing |
| `models/TripPlan.js` | MongoDB schema for trip plans linked to users |
| `routes/auth.js` | POST /signup, POST /signin endpoints |
| `routes/tripplans.js` | GET/POST/PUT/DELETE endpoints for trip plans |
| `middleware/auth.js` | Verifies JWT tokens on protected routes |
| `.env` | MongoDB URI, JWT secret, port settings |
| `package.json` | Dependencies: express, mongoose, bcryptjs, jsonwebtoken |

---

## 🔄 How They Connect

```
Frontend                          Backend                        Database
(React Port 3003)               (Node.js Port 5000)            (MongoDB)
      │                                │                             │
      ├─ Sign Up Form ──POST────>  /api/auth/signup ────>  Create User
      │                                │
      ├─ Sign In Form ──POST────>   /api/auth/signin  ────>  Find User
      │                                │
      ├─ JWT Token (saved to localStorage)
      │                                │
      ├─ Start Planning Form ──POST──> /api/tripplans ────>  Save Trip Plan
      │  (with Authorization header)   │
      └─────────────────────────────────┘
```

---

## 📝 Development Workflow

### Working on Frontend
```bash
cd frontend
npm start
# Frontend runs on http://localhost:3003
# Modify files in src/views/ or src/components/
# Changes auto-reload in browser
```

### Working on Backend
```bash
cd backend
npm run dev
# Backend runs on http://localhost:5000
# Uses nodemon for auto-reload
# Test endpoints with Postman
```

### Running Both Together
```bash
# From root directory
npm start
# Starts both frontend and backend concurrently
```

---

## 🔑 Key Environment Variables

### Frontend (`frontend/.env`)
```
PORT=3003                              # Frontend port
REACT_APP_API_URL=http://localhost:5000/api  # Backend API URL
```

### Backend (`backend/.env`)
```
MONGODB_URI=mongodb://localhost:27017/tripcrafters  # MongoDB connection
JWT_SECRET=your_jwt_secret_key_here   # For token signing
PORT=5000                              # Backend port
NODE_ENV=development
```

---

## 🚀 Deployment Structure

When deployed, the structure will be:

```
Production Server
├── Backend API (Backend Folder)
│   └── Running on http://api.example.com:5000
│
└── Frontend (Frontend Folder Build Output)
    └── Running on https://example.com (static files)
```

Both connect via `REACT_APP_API_URL` environment variable.

---

## 📦 Installation & Setup

### Install All Dependencies
```bash
npm run install-all
```

This runs:
1. `npm install` (root)
2. `cd frontend && npm install`
3. `cd backend && npm install`

### Start Development
```bash
npm start
# Both frontend and backend start automatically
```

---

## 🔍 File Locations Reference

**Where is...?**

- **Login page** → `frontend/src/views/signin.js`
- **Registration page** → `frontend/src/views/signup.js`
- **Trip planning form** → `frontend/src/views/start-planning.js`
- **Navigation bar** → `frontend/src/components/navigation.js`
- **Sign up API** → `backend/routes/auth.js` (POST /signup)
- **Trip plans API** → `backend/routes/tripplans.js` (POST /tripplans)
- **User database model** → `backend/models/User.js`
- **Trip plan database model** → `backend/models/TripPlan.js`
- **Auth middleware** → `backend/middleware/auth.js`

---

## ✅ Monorepo Benefits

✅ **Clear Separation** - Frontend and backend are separate but related
✅ **Easy Development** - Work on frontend or backend independently
✅ **Single Repository** - One git repo for entire project
✅ **Shared Scripts** - Root package.json manages both
✅ **Simple Deployment** - Deploy frontend and backend separately
✅ **Better Organization** - No mixed concerns or confusion

---

## 📚 Additional Resources

- **FULL_STACK_SETUP.md** - Complete setup and API documentation
- **BACKEND_SETUP.md** - Backend-specific setup guide
- **README.md** - Project overview and quick start

---

**Last Updated:** November 24, 2025
**Status:** ✅ Monorepo structure ready
