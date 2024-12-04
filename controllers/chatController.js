import ChatMessage from '../models/chatMessageModel.js';

// פונקציה לשליחת הודעה בצ'אט
export const sendMessage = async (req, res) => {
  const { courseId, message } = req.body;
  
  const chatMessage = new ChatMessage({
    course: courseId,
    user: req.user._id,
    message,
  });

  try {
    await chatMessage.save();
    res.status(201).json({ message: 'Message sent successfully', chatMessage });
  } catch (error) {
    res.status(400).json({ message: 'Error sending message', error });
  }
};
