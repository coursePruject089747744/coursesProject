import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');
      req.user.role = decoded.role; // מוסיף את התפקיד למידע על המשתמש

      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};





// import jwt from'jsonwebtoken';
// import User from '../models/User.js';

// const isAuthenticated = async (req, res, next) => {
//   const token = req.header('Authorization').replace('Bearer ', '');
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// };

// const isAdminOrTeacher = async (req, res, next) => {
//   if (req.user.isAdmin || req.user._id.equals(req.body.teacher)) {
//     next();
//   } else {
//     res.status(403).json({ message: 'Permission denied' });
//   }
// };

// export { isAuthenticated, isAdminOrTeacher };