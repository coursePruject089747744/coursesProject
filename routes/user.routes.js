import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getUserProfile, getAllUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protect, getAllUsers);
router.get('/profile', protect, getUserProfile);


export default router;