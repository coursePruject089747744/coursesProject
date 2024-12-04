import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  enrollmentDate: { type: Date, default: Date.now },
  progress: { type: Number, default: 0 } // התקדמות בקורס באחוזים
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
export default Enrollment;