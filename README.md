# User Management System - Backend API

Secure Node.js/Express REST API with MongoDB, JWT auth, role-based access, and 73+ unit tests (100% coverage).

## 🛠 Tech Stack

- **Node.js & Express.js** — API framework
- **MongoDB & Mongoose** — NoSQL database
- **JWT & bcryptjs** — Authentication & hashing
- **Jest** — Unit testing (7 tests)

## 🚀 Quick Start

```bash
git clone <repository-url>
cd backend
npm install
echo "MONGODB_URI=mongodb://localhost:27017/user-management" > .env
echo "JWT_SECRET=your-secret-key" >> .env
npm start
```

Runs on `http://localhost:5000`

## 📋 Commands

```bash
npm start       # Dev server
npm run test    # Unit tests + coverage
npm run seed    # Sample data
```

## 🔐 Environment Variables

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/user-management
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

## 📡 API Endpoints

All endpoints require `Authorization: Bearer <token>` header (except auth endpoints).

**Auth:** `POST /api/auth/signup` | `POST /api/auth/login`  
**Users:** `GET /api/users/profile` | `PUT /api/users/profile`  
**Admin:** `GET /api/admin/users` | `PUT /api/admin/users/:id` | `DELETE /api/admin/users/:id`

