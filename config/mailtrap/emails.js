import { sender, transporter } from "./email.config.js";
import { 
    PASSWORD_RESET_REQUEST_TEMPLATE, 
    PASSWORD_RESET_SUCCESS_TEMPLATE, 
    VERIFICATION_EMAIL_TEMPLATE,
    WELCOME_EMAIL_TEMPLATE
    } from "./emailTemplates.js";


export const sendVerificationEmail = async (email, verificationToken) => {

    try {
        const response = await transporter.sendMail({
            from: sender.email,
            to: email,
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        });

        console.log("Email sent successfully", response);
    } catch (error) {
        console.error(`Error sending verification ${error}`);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {

    try {
        const response = await transporter.sendMail({
            from: sender.email,
            to: email,
            subject: `ברוך הבא ל-${sender.name} - ההרשמה שלך הושלמה בהצלחה!`,
            html: WELCOME_EMAIL_TEMPLATE
                    .replace(/{userName}/g, name)
                    .replace(/{companyName}/g, sender.name)
        });
       
        console.log("Welcome Email sent successfully", response);
    } catch (error) {
        console.error(`Error sending verification ${error}`);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {

    try {
        
        const response = await transporter.sendMail({
            from: sender.email,
            to: email,
            subject: 'Reset your password',
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
        });
        
        console.log("Email sent successfully", response);
    } catch (error) {
        console.error(`Error sending password reset email ${error}`);
        throw new Error(`Error sending password reset email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email) => {

    try {
        const response = await transporter.sendMail({
            from: sender.email,
            to: email,
            subject: 'Password Reset Successful',
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        });
        
        console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error(`Error sending password reset success email ${error}`);
        throw new Error(`Error sending password reset success email: ${error}`);
    }
};