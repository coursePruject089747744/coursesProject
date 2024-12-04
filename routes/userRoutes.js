import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { registerUser, loginUser, getUserProfile, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.get('/', protect, getAllUsers); 
router.post('/register', registerUser);
router.get('/profile', protect, getUserProfile);


export default router;