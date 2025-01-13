import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sender = {
  email: process.env.SENT_MAIL,
  name: "קול - הילד קורסים ",
};

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENT_MAIL,
    pass: process.env.PASSWORD_MAIL
  }
});
