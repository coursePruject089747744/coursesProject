import Course from "../models/course.model.js";
import Lesson from "../models/lesson.model.js";

export const createLesson = async (req, res) => {
  try {

    if (req.user.role !== "admin") {

      return res.status(500).json({
        success: false,
        message: "Only admin users are authorized to created."
      });
    };

    const { name, description, instructorId } = req.body;

    const newLesson = new Lesson({ name, description, instructorId });
    
    await newLesson.save();

    res.status(201).json({
      success: true,
      message: "Lesson created successfully",
      lesson: newLesson
    });

  } catch (error) {
    res.status(500).json({ message: "Error creating Lesson", error });
  }
};

export const updateLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const updates = req.body;
    
    const lesson = await Lesson.findById(lessonId);

    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    const checkIsTeacher = Course.instructors.some(
      (instructor) => instructor.instructorId.toString() === req.user._id.toString()
    );

    if (req.user.role !== "admin" && !checkIsTeacher) {
      res.status(500).json({message: "uonly user admin can deleted "});
    };

    const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, updates, { new: true });

    res.status(200).json(updatedLesson);

  } catch (error) {
    res.status(500).json({ message: "Error updating lesson", error });
  }
};

export const deleteLesson = async (req, res) => {
  try {

    if (req.user.role !== "admin") {
      return res.status(500).json({message: "Only admin users are authorized to delete."});
    };

    const { lessonId } = req.params;

    const deletedLesson = await Lesson.findOneAndDelete({ _id: lessonId });

    if (!deletedLesson) return res.status(404).json({ message: "Lesson not found" });

    res.status(200).json({ message: "Lesson and related chapter deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting lesson", error });
  }
};