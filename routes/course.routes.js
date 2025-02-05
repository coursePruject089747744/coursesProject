import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { 
    createCourse, 
    deleteCourse, 
    enrollInCourse, 
    updateCourse 
    } from '../controllers/course.controller.js';

const courseRoutes = express.Router();

courseRoutes.post('/createNewCourse', protect, createCourse); // הוספת קורס
courseRoutes.post('/update/:courseId', protect, updateCourse); // עדכון קורס
courseRoutes.delete('/deleted/:courseId', protect, deleteCourse); // מחיקת קורס

export default courseRoutes;


courseRoutes.post('/:id/enroll', protect, enrollInCourse); // הרשמה לקורס