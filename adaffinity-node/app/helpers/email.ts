import nodemailer from 'nodemailer';
import path from 'path';

let handlebars;
(async () => {
    const { default: hbs } = await import("nodemailer-express-handlebars");
    handlebars = hbs; // Store the handlebars module for later use
})();

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD  
    }
});

// Set up Handlebars options
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve("./app/emailTemplates/"), // Path to email templates
        defaultLayout: false, // No default layout
    },
    viewPath: path.resolve("./app/emailTemplates/"), // Path to email templates
};
const sendEmail = async (emailData) => {
    const { from, replyTo, to, subject } = emailData;
    const { emailTemplate, title, firstName, message, ticketUrl, copyrightDate, filename, path: attachmentPath } = emailData.data;

    try {
        if (!handlebars) {
            throw new Error("Handlebars module is not loaded yet.");
        }

        // Dynamically load Handlebars for the current transporter
        transporter.use("compile", handlebars(handlebarOptions));

        // Construct mail options
        const mailOptions = {
            from: from,
            replyTo: replyTo,
            to: to,
            subject: subject,
            template: emailTemplate, // Handlebars template to use
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
            // Optional: If you have plain text or HTML content, uncomment the next lines
            // text: text,
            // html: html,
        };

        // Send email using transporter
        const info = await transporter.sendMail(mailOptions);

        // Log success and return response
        console.log("Email sent: " + info.response);
        return info.response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Propagate the error for handling at a higher level
    }
};

module.exports = sendEmail;
  