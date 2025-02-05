import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createChapter, deleteChapter, updateChapter } from '../controllers/chapter.controller.js';

const chapterRoutes = express.Router();

chapterRoutes.post('/createNewChapter', protect, createChapter); // הוספת שיעור
chapterRoutes.post('/update/:chapterId', protect, updateChapter); // עדכון שיעור
chapterRoutes.delete('/deleted/:chapterId', protect, deleteChapter); // מחיקת שיעור

export default chapterRoutes;