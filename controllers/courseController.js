import Course from '../models/courseModel.js';
import User from '../models/userModel.js';
import Enrollment from '../models/enrollmentModel.js';

// פונקציה להוספת קורס
export const createCourse = async (req, res) => {
  const { title, description } = req.body;
  const course = new Course({ title, description, instructor: req.user._id });
  
  try {
    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    res.status(400).json({ message: 'Error creating course', error });
  }
};

// פונקציה להרשמה לקורס
export const enrollInCourse = async (req, res) => {
  const userId = req.user._id;
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId);
    const user = await User.findById(userId);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // בדיקה אם המשתמש כבר רשום לקורס
    const existingEnrollment = await Enrollment.findOne({ user: userId, course: courseId });
    if (existingEnrollment) {
      return res.status(400).json({ message: 'You are already enrolled in this course' });
    }

    // יצירת הרשמה חדשה
    const enrollment = new Enrollment({ user: userId, course: courseId });
    await enrollment.save();

    // הוספת הקורס לרשימת הקורסים של המשתמש
    user.enrolledCourses.push(courseId);
    await user.save();

    res.status(200).json({ message: 'Enrollment successful', enrollment });
  } catch (error) {
    res.status(500).json({ message: 'Error enrolling in course', error });
  }
};
