# TripCrafters Full Stack Setup Guide

## Project Architecture

```
TripCrafters/
├── Frontend (React)
│   ├── Sign Up Page → /signup
│   ├── Sign In Page → /signin
│   ├── Start Planning Form → /start-planning (Protected)
│   └── Connected to http://localhost:5000/api
│
└── Backend (Node.js + Express)
    ├── Models
    │   ├── User (email, password, firstName, lastName)
    │   └── TripPlan (linked to userId)
    ├── Routes
    │   ├── /api/auth/signup
    │   ├── /api/auth/signin
    │   └── /api/tripplans (CRUD)
    └── Database: MongoDB
```

## Quick Start

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Set Up MongoDB
**Option A: Local MongoDB**
```bash
# Install MongoDB Community Edition
# Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
# Mac: brew install mongodb-community
# Linux: https://docs.mongodb.com/manual/installation/

# Start MongoDB
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/tripcrafters`
5. Update `backend/.env` with your connection string

### 3. Configure Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/tripcrafters
JWT_SECRET=your_jwt_secret_key_change_in_production
PORT=5000
NODE_ENV=development
```

### 4. Start Backend Server
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

### 5. Frontend Already Configured
```bash
# The frontend is pre-configured to connect to backend
# REACT_APP_API_URL=http://localhost:5000/api
npm start
# Frontend runs on http://localhost:3003
```

## User Journey

### 1. **Sign Up Flow**
```
User clicks "Sign Up" 
  ↓
Enters: First Name, Last Name, Email, Password
  ↓
Click "Create Account"
  ↓
Frontend: POST /api/auth/signup
  ↓
Backend: Hash password → Save to MongoDB → Issue JWT token
  ↓
Frontend: Save token + user info to localStorage
  ↓
Redirect to /start-planning
```

### 2. **Sign In Flow**
```
User clicks "Sign In"
  ↓
Enters: Email, Password
  ↓
Click "Sign In"
  ↓
Frontend: POST /api/auth/signin
  ↓
Backend: Find user → Compare password → Issue JWT token
  ↓
Frontend: Save token to localStorage
  ↓
Redirect to Home (/)
```

### 3. **Start Planning Flow** (Protected Route)
```
User on /start-planning
  ↓
Check: Is JWT token in localStorage?
  ├─ NO → Redirect to /signup
  └─ YES → Continue
  ↓
Fill Trip Details:
  - Destination, Duration, # of Travelers
  ↓
Fill Preferences:
  - Interests (checkboxes)
  - Budget (dropdown)
  ↓
Fill Schedule:
  - Travel Date
  ↓
Fill Contact Info:
  - Name, Email, Phone
  ↓
Click "Create Account" button
  ↓
Frontend: POST /api/tripplans with JWT token
  ↓
Backend: Verify token → Link to userId → Save to MongoDB
  ↓
Show success message
```

## API Endpoints Reference

### Authentication (`/api/auth`)

#### POST /api/auth/signup
**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

#### POST /api/auth/signin
**Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Signed in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

### Trip Plans (`/api/tripplans`)

#### POST /api/tripplans (Protected)
**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```json
{
  "tripDetails": {
    "destination": "Paris",
    "duration": 7,
    "numberOfTravelers": 2
  },
  "preferences": {
    "interests": ["Museums", "Food & Wine"],
    "budget": "Mid-Range"
  },
  "schedule": {
    "startDate": "2025-06-15"
  },
  "contactInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}
```

**Response (201):**
```json
{
  "message": "Trip plan created successfully",
  "tripPlan": {
    "_id": "507f1f77bcf86cd799439012",
    "userId": "507f1f77bcf86cd799439011",
    "tripDetails": {...},
    "status": "Pending",
    "createdAt": "2025-11-24T10:00:00Z"
  }
}
```

#### GET /api/tripplans (Protected)
Get all trip plans for authenticated user

#### GET /api/tripplans/:id (Protected)
Get specific trip plan

#### PUT /api/tripplans/:id (Protected)
Update trip plan

#### DELETE /api/tripplans/:id (Protected)
Delete trip plan

## Testing with Postman

1. **Download Postman** from https://www.postman.com/downloads/

2. **Create Sign Up Request**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/signup`
   - Body (JSON):
   ```json
   {
     "firstName": "Test",
     "lastName": "User",
     "email": "test@example.com",
     "password": "password123",
     "confirmPassword": "password123"
   }
   ```
   - Send and copy the returned `token`

3. **Create Trip Plan Request**
   - Method: POST
   - URL: `http://localhost:5000/api/tripplans`
   - Headers:
     - Key: `Authorization`
     - Value: `Bearer {paste_token_here}`
   - Body (JSON):
   ```json
   {
     "tripDetails": {
       "destination": "Tokyo",
       "duration": 5,
       "numberOfTravelers": 1
     },
     "preferences": {
       "interests": ["Cultural & Historical"],
       "budget": "Mid-Range"
     },
     "schedule": {
       "startDate": "2025-12-01"
     },
     "contactInfo": {
       "name": "Test User",
       "email": "test@example.com",
       "phone": "1234567890"
     }
   }
   ```
   - Send request

## Security Features

✅ **Password Encryption**
- Passwords hashed with bcryptjs (salt rounds: 10)
- Never stored in plain text

✅ **JWT Authentication**
- Tokens expire in 30 days
- Tokens verified on protected routes
- Token stored in localStorage (frontend)

✅ **Authorization**
- Users can only access their own trip plans
- userId check on every request

✅ **Input Validation**
- Email format validation
- Password requirements enforced
- MongoDB schema validation

✅ **CORS Enabled**
- Frontend can safely communicate with backend
- Configured for localhost in development

## Environment Variables

**Frontend (.env)**
```
PORT=3003
REACT_APP_API_URL=http://localhost:5000/api
```

**Backend (.env)**
```
MONGODB_URI=mongodb://localhost:27017/tripcrafters
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
```

## Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is available
# Kill process: lsof -i :5000 (Mac/Linux) or netstat (Windows)
# Check MongoDB is running
```

### Frontend can't connect to backend
```
Error: "Failed to fetch from API"
Solution: Ensure backend is running on port 5000
Check: REACT_APP_API_URL in .env
```

### "Token expired" error
```
Solution: Sign out and sign back in
Tokens expire after 30 days of inactivity
```

### MongoDB connection error
```
Check connection string in backend/.env
Ensure MongoDB is running
For Atlas: Check IP whitelist and username/password
```

## Next Steps

1. **Deploy MongoDB Atlas** (free tier available)
2. **Deploy Backend** to Heroku, Railway, or Render
3. **Deploy Frontend** to Vercel, Netlify, or GitHub Pages
4. **Update REACT_APP_API_URL** to production backend URL
5. **Change JWT_SECRET** to random string in production
6. **Set NODE_ENV** to `production`

## Project Status

✅ **Completed**
- User registration and authentication
- Password hashing and security
- JWT token-based auth
- Trip planning form with backend integration
- Protected routes (Start Planning requires login)
- MongoDB data persistence
- Error handling and validation

🔄 **Future Enhancements**
- Email verification on signup
- Password reset functionality
- User profile management
- Trip plan status tracking
- Email notifications
- Payment integration
- Admin dashboard

---

**Built with:** React • Node.js • Express • MongoDB • JWT • Bcryptjs
