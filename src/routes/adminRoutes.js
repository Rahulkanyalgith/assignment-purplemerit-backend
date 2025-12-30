const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  activateUser,
  deactivateUser,
  updateUserRole,
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/auth');

// All routes require authentication and admin role
router.use(protect, adminOnly);

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id/activate', activateUser);
router.put('/users/:id/deactivate', deactivateUser);
router.put('/users/:id/role', updateUserRole);

module.exports = router;
