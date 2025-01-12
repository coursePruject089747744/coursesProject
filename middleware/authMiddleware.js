import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const createTokenAndSetCookie = (res, user) => {
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
   //שומר את הטוקן התחברות בקוקיז למשך יום אחד
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",     
    maxAge: 24 * 60 * 60 * 1000, //one day
    sameSite: 'strict'
  });

  return token;
};

export const protect = async (req, res, next) => {
  let token;

  if (req.cookies && req.cookies.token) {
    try {
      token = req.cookies.token;
      
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