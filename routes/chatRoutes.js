import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { sendMessage } from '../controllers/chatController.js';


const router = express.Router();

router.post('/send', protect, sendMessage); // שליחת הודעה בצ'אט

export default router;
