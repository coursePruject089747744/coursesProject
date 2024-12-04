import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  materials: [{
    type: { type: String, enum: ['video', 'pdf', 'image', 'file'], required: true },
    url: { type: String, required: true }
  }],
  chatMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatMessage' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Course = mongoose.model('Course', courseSchema);
export default Course;









// import mongoose from 'mongoose';

// const courseSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
// });

// export default mongoose.model('Course', courseSchema);
