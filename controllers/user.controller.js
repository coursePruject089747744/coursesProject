import {User} from '../models/user.model.js';

// פונקציה לקבלת פרופיל משתמש
export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// פונקציה לקבלת כל המשתמשים
export const getAllUsers = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    const users = await User.find().select('-password'); // הסרת סיסמאות
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    // בדיקה אם המשתמש הוא אדמין או מנסה למחוק את עצמו
    const userId = req.user.role === 'admin' ? req.params.id : req.user._id;

    if (!userId) {
      res.status(404).json({ message: 'User not found' });
    };

    await User.findByIdAndDelete(userId);
    res.json({ message: 'User removed successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    
    const userId = req.user.role === 'admin' ? req.params.id : req.user._id;

    if (!userId) {
      return res.status(404).json({ message: 'User not found' });
    };
    const updates = req.body;


    // אם יש בקשה לעדכן את השדה 'role', נוודא שרק אדמין יכול לעשות זאת
    if (updates.role && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Only admins can update the role' });
    };

    if ( updates.password || updates.email ) {
      return res.status(403).json({ message: 'Changes to sensitive fields are not permitted.' });
    };

    // עדכון המשתמש במסד הנתונים
    const user = await User.findByIdAndUpdate(
      userId, 
      { ...updates }, 
      { 
        new: true, // מחזיר את האובייקט המעודכן 
        runValidators: true // מפעיל ולידציה לפי הסכימה
      }
    );

    if (!user) {
      return res.status(400).json({ message: 'Failed to update user.' });
    };

    res.json({ message: 'User updated successfully', user });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


