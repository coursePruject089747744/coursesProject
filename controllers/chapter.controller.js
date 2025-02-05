import Course from "../models/course.model.js";
import Chapter from "../models/chapter.model.js";

export const createChapter = async (req, res) => {
  try {

    if (req.user.role !== "admin") {

      return res.status(500).json({
        success: false,
        message: "Only admin users are authorized to created."
      });
    };

    const { name, description, instructorId } = req.body;

    const newChapter = new Chapter({ name, description, instructorId });
    
    await newChapter.save();

    res.status(201).json({
      success: true,
      message: "Chapter created successfully",
      lesson: newChapter
    });

  } catch (error) {
    res.status(500).json({ message: "Error creating Chapter", error });
  }
};

export const updateChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const updates = req.body;
    
    const chapter = await Chapter.findById(lessonId);

    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    const checkIsTeacher = Course.instructors.some(
      (instructor) => instructor.instructorId.toString() === req.user._id.toString()
    );

    if (req.user.role !== "admin" && !checkIsTeacher) {
      res.status(500).json({message: "uonly user admin can update "});
    };

    const updatedChapter = await Chapter.findByIdAndUpdate(chapterId, updates, { new: true });

    res.status(200).json(updatedChapter);

  } catch (error) {
    res.status(500).json({ message: "Error updating Chapter", error });
  }
};

export const deleteChapter = async (req, res) => {
  try {

    if (req.user.role !== "admin") {
      return res.status(500).json({message: "Only admin users are authorized to delete."});
    };

    const { chapterId } = req.params;

    const deletedChapter = await Chapter.findOneAndDelete({ _id: chapterId });

    if (!deletedChapter) return res.status(404).json({ message: "Chapter not found" });

    res.status(200).json({ message: "Chapter and related chapter deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting chapter", error });
  }
};