import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getUserProfile, getAllUsers, deleteUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protect, getAllUsers);
router.get('/profile', protect, getUserProfile);
router.delete('/delete/:id', protect, deleteUser);
router.put('/update/:id', protect, updateUser);


export default router;