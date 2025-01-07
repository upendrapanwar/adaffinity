import nodemailer from 'nodemailer';
import path from 'path';
import expressHandlebars from 'express-handlebars';

const handlebars = require('nodemailer-express-handlebars');

// Initialize the transporter with Nodemailer
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Configure Handlebars options
const handlebarOptions: any = {
    viewEngine: expressHandlebars.create({
        // Correct configuration for the Handlebars engine
        layoutsDir: path.resolve("./app/email-templates/layouts/"),
        partialsDir: path.resolve("./app/email-templates/partials/"),
        defaultLayout: 'main',  // Define a default layout if necessary
        extname: '.hbs',  // Optional: Define file extension for templates
    }),
    viewPath: path.resolve("./app/email-templates/"),
    extName: '.hbs', // Optional: Specify the extension
};

// Apply Handlebars to the transporter
transporter.use('compile', handlebars(handlebarOptions));

const sendEmail = async (emailData: any) => {
    const { from, replyTo, to, subject } = emailData;
    const { emailTemplate, title, firstName, message, ticketUrl, copyrightDate, filename, path: attachmentPath } = emailData.data;

    try {
        // Construct mail options
        const mailOptions = {
            from: from,
            replyTo: replyTo,
            to: to,
            subject: subject,
            template: emailTemplate,
            context: {
                title: title,
                name: firstName,
                message: message,
                ticketUrl: ticketUrl,
                copyrightDate: copyrightDate,
            },
            attachments: filename && attachmentPath ? [{
                filename: filename,
                path: attachmentPath,
            }] : [],
        };

        // Send email using transporter
        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent: " + info.response);
        return info.response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

export default sendEmail;
