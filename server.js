import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js';
// import courseRoutes from './routes/courseRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes);
// app.use('/api/courses', courseRoutes);
app.use('/api/chat', chatRoutes);


app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});









// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './db.js';
// import paymentRoutes from './routes/paymentRoutes.js';
// import courseRoutes from './routes/courseRoutes.js';
// import userRoutes from './routes/userRoutes.js';

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB Atlas
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/payment', paymentRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/users', userRoutes);  // מסלול המשתמשים

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
