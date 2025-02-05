import mongoose from "mongoose";
import Chapter from "./chapter.model.js";

const lessonSchema = new mongoose.Schema({
  lessonId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
}, { timestamps: true });

lessonSchema.pre("findOneAndDelete", async function (next) {
  const lessonId = this.getQuery()._id;

  // מחיקת כל הפרקים של השיעור
  await Cha.deleteMany({ lessonId });

  next();
});

const Lesson = mongoose.model("Lesson", lessonSchema);
export default Lesson;

