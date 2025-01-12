import {User} from '../models/user.model.js';
import Course from '../models/courseModel.js';
import Enrollment from '../models/enrollmentModel.js';
// import { uploadVideoToVimeo } from '../services/vimeoService.js';


export const createCourse = async (req, res) => {
  const { title, description, lessons } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  try {
    const newLessons = await Promise.all(
      lessons.map(async (lesson) => {
        if (lesson.videoFile) {
          // העלאת הווידאו ל-Vimeo
          const videoUrl = await uploadVideoToVimeo(lesson.videoFile, lesson.title, lesson.title);
          return { title: lesson.title, videoUrl };
        } else {
          return { title: lesson.title, videoUrl: lesson.videoUrl };
        }
      })
    );

    // יצירת הקורס ושמירתו במסד הנתונים
    const course = new Course({
      title,
      description,
      instructor: req.user._id,
      lessons: newLessons
    });

    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error: error.message });
  }
};

// שליפת קורס עם כל השיעורים שלו
export const getCourseWithLessons = async (req, res) => {
  const { courseId } = req.params;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error: error.message });
  }
};



// // פונקציה להוספת קורס
// export const createCourse = async (req, res) => {
//   const { title, description } = req.body;
//   const course = new Course({ title, description, instructor: req.user._id });
  
//   try {
//     await course.save();
//     res.status(201).json({ message: 'Course created successfully', course });
//   } catch (error) {
//     res.status(400).json({ message: 'Error creating course', error });
//   }
// };

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
