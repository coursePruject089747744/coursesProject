import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createCourse, enrollInCourse } from '../controllers/courseController.js';

const router = express.Router();

router.post('/', protect, createCourse); // הוספת קורס
router.post('/:id/enroll', protect, enrollInCourse); // הרשמה לקורס

export default router;





// import express from 'express';
// import User from '../models/User.js';
// import Course from '../models/Course.js';
// import { isAuthenticated, isAdminOrTeacher } from '../middleware/auth.js';

// const router = express.Router();

// // Get all courses
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find().populate('teacher');
//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Register for a course (after successful payment)
// router.post('/register', isAuthenticated, async (req, res) => {
//   try {
//     const { courseId } = req.body;
//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     // Add the course to the user's enrolledCourses
//     const user = await User.findById(req.user.id);
//     user.enrolledCourses.push(course._id);
//     await user.save();

//     res.json({ message: 'Course registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Add a new course (only admin or teacher can add)
// router.post('/add', isAuthenticated, isAdminOrTeacher, async (req, res) => {
//     try {
//       const { title, description, price, teacherId } = req.body;
  
//       const newCourse = new Course({
//         title,
//         description,
//         price,
//         teacher: teacherId,
//       });
  
//       await newCourse.save();
//       res.status(201).json(newCourse);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
  

// export default router;
