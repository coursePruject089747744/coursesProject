import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import lessonRoutes from './routes/lesson.routes.js';
import chapterRoutes from './routes/chapter.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/lesson', lessonRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/chapter', chapterRoutes);


app.listen(PORT, () => {
  connectDB(); 
  console.log(`Server running on port ${PORT}`);
});