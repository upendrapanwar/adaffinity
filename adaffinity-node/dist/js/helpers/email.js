"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const handlebars = require('nodemailer-express-handlebars');
// Initialize the transporter with Nodemailer
const transporter = nodemailer_1.default.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
// Configure Handlebars options
const handlebarOptions = {
    viewEngine: express_handlebars_1.default.create({
        // Correct configuration for the Handlebars engine
        layoutsDir: path_1.default.resolve("./app/email-templates/layouts/"),
        partialsDir: path_1.default.resolve("./app/email-templates/partials/"),
        defaultLayout: 'main', // Define a default layout if necessary
        extname: '.hbs', // Optional: Define file extension for templates
    }),
    viewPath: path_1.default.resolve("./app/email-templates/"),
    extName: '.hbs', // Optional: Specify the extension
};
// Apply Handlebars to the transporter
transporter.use('compile', handlebars(handlebarOptions));
const sendEmail = (emailData) => __awaiter(void 0, void 0, void 0, function* () {
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
        const info = yield transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return info.response;
    }
    catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
});
exports.default = sendEmail;
