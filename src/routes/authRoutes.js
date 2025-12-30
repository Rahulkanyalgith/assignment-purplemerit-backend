const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  getMe,
  logout,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const {
  signupValidation,
  loginValidation,
} = require('../middleware/validation');

// Public routes
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

module.exports = router;
