# TripCrafters Backend API Setup

## Backend Structure
✅ **Node.js + Express** - REST API server
✅ **MongoDB** - NoSQL database for users and trip plans
✅ **JWT Authentication** - Secure token-based authentication
✅ **Bcryptjs** - Password encryption

## Installation

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Set Up MongoDB
- Install MongoDB locally or use MongoDB Atlas (cloud)
- Update `backend/.env` with your MongoDB URI

### 3. Configure Environment Variables
```
MONGODB_URI=mongodb://localhost:27017/tripcrafters
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

### 4. Start Backend Server
```bash
npm run dev
```
Server will run on http://localhost:5000

## API Endpoints

### Authentication Routes (`/api/auth`)

#### Sign Up
- **POST** `/api/auth/signup`
- **Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```
- **Response:** Returns JWT token and user info

#### Sign In
- **POST** `/api/auth/signin`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:** Returns JWT token and user info

### Trip Plan Routes (`/api/tripplans`)

#### Create Trip Plan (Protected)
- **POST** `/api/tripplans`
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
```json
{
  "tripDetails": {
    "destination": "Paris",
    "duration": 7,
    "numberOfTravelers": 2
  },
  "preferences": {
    "interests": ["museums", "restaurants"],
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

#### Get All Trip Plans (Protected)
- **GET** `/api/tripplans`
- **Headers:** `Authorization: Bearer {token}`

#### Get Single Trip Plan (Protected)
- **GET** `/api/tripplans/:id`
- **Headers:** `Authorization: Bearer {token}`

#### Update Trip Plan (Protected)
- **PUT** `/api/tripplans/:id`
- **Headers:** `Authorization: Bearer {token}`

#### Delete Trip Plan (Protected)
- **DELETE** `/api/tripplans/:id`
- **Headers:** `Authorization: Bearer {token}`

## Testing with Postman

1. **Sign Up**: POST to `/api/auth/signup` with user data
2. **Copy Token**: Save the returned JWT token
3. **Sign In**: POST to `/api/auth/signin` with email/password
4. **Create Trip Plan**: POST to `/api/tripplans` with Bearer token in headers
5. **Get Trip Plans**: GET `/api/tripplans` with Bearer token

## Frontend Integration

Update your React Sign Up and Sign In pages to:
1. Send requests to backend API endpoints
2. Store JWT token in localStorage
3. Include token in headers for trip plan requests

## Database Models

### User Schema
- firstName, lastName
- email (unique)
- password (hashed with bcrypt)
- createdAt, updatedAt

### TripPlan Schema
- userId (reference to User)
- tripDetails (destination, duration, travelers)
- preferences (interests, budget)
- schedule (startDate)
- contactInfo (name, email, phone)
- status (Pending, In Progress, Completed, Cancelled)

## Security Features
- JWT token-based authentication
- Password hashing with bcryptjs
- Protected routes requiring authentication
- User can only access their own trip plans
- CORS enabled for frontend integration
