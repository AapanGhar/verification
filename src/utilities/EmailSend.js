import nodemailer from 'nodemailer'
import { SERVER_CONFIG } from '../config/SERVER_CONFIG.js'

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SERVER_CONFIG.EMAIL_USER_NAME,
        pass: SERVER_CONFIG.EMAIL_PASSWORD,
    },
});

// Email options
const sendEmail = (recipientEmail, content) => {
    const mailOptions = {
        from: SERVER_CONFIG.EMAIL_ID,
        to: recipientEmail,
        subject: SERVER_CONFIG.EMAIL_SUBJECT,
        text: content
    };
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error.message);
        } else {
            return true
        }
        // Close the transporter
        transporter.close();
    });
}

export default sendEmail