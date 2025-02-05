import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createLesson, deleteLesson, updateLesson } from '../controllers/lesson.controller.js';

const lessonRoutes = express.Router();

lessonRoutes.post('/createNewLesson', protect, createLesson); // הוספת קורס
lessonRoutes.post('/update/:lessonId', protect, updateLesson); // עדכון קורס
lessonRoutes.delete('/deleted/:lessonId', protect, deleteLesson); // מחיקת קורס

export default lessonRoutes;