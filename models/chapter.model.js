import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  chapterId: { type: String, required: true },
  title: { type: String, required: true },
});

const Chapter = mongoose.model("Chapter", chapterSchema);
export default Chapter;