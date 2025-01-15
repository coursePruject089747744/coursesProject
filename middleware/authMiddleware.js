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
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};
