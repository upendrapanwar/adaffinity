"use strict";
/**
 * File Name: Auth Service
 *
 * Description: Manages auth operations related with the advertisors and creactor module
 *
 * Author: Add Affinity
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const email_1 = __importDefault(require("../helpers/email"));
const db_1 = require("../helpers/db");
exports.default = {
    createAccount,
    getUserById,
    authenticate,
};
function createAccount(param) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (yield db_1.User.findOne({ email: param.email })) {
                throw 'email "' + param.email + '" is already taken';
            }
            const user = new db_1.User({
                first_name: param.first_name,
                last_name: param.last_name,
                email: param.email,
                password: bcryptjs_1.default.hashSync(param.password, 10),
                role: param.role,
                isActive: false,
            });
            const data = yield user.save();
            const authData = yield authenticate({ email: param.email, password: param.password });
            if (data) {
                sendWellcomeEmail(param);
                let res = yield db_1.User.findById(data.id).select("-password -social_accounts -reset_password -image_url");
                if (res && authData) {
                    let response = {
                        data: data,
                        authData: {
                            token: authData.token,
                            expTime: authData.expTimeTimestamp
                        }
                    };
                    //sendMail(mailOptions);
                    return response;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    });
}
/*****************************************************************************************/
/*****************************************************************************************/
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield db_1.User.findById(id); // Assuming you're using Mongoose
            return user;
        }
        catch (error) {
            console.error("Error fetching user by ID:", error);
            throw error;
        }
    });
}
/*****************************************************************************************/
/*****************************************************************************************/
/**
 * Manages user login operations
 *
 * @param {email,passwrd}
 *
 * @returns Object|null
 */
function authenticate(_a) {
    return __awaiter(this, arguments, void 0, function* ({ email, password }) {
        const user = yield db_1.User.findOne({ email });
        if (user && bcryptjs_1.default.compareSync(password, user.password)) {
            const _b = user.toObject(), { password, reset_password, __v, createdAt, updatedAt } = _b, userWithoutHash = __rest(_b, ["password", "reset_password", "__v", "createdAt", "updatedAt"]);
            const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.SECRET, {
                expiresIn: "2h",
            });
            var expTime = new Date();
            expTime.setHours(expTime.getHours() + 2); //2 hours token expiration time
            //expTime.setMinutes(expTime.getMinutes() + 2);
            var expTimeTimestamp = expTime.getTime();
            return Object.assign(Object.assign({}, userWithoutHash), { token,
                expTimeTimestamp });
        }
    });
}
/*****************************************************************************************/
/*****************************************************************************************/
function sendWellcomeEmail(param) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const verifyEmailUrl = (process.env.LOCAL_URL || "http://localhost:3000") + "/verify-email";
            const customData = {
                title: 'Welcome Email',
                emailTemplate: 'welcomeEmail',
                firstName: param.body.first_name,
                lastname: param.body.last_name,
                verificationUrl: verifyEmailUrl,
                copyrightDate: new Date().getFullYear()
            };
            const mailOptions = {
                from: `"Adaffinity" <${process.env.ADMIN_EMAIL}>`,
                replyTo: `"Booking App Live" <${process.env.ADMIN_EMAIL}>`,
                to: `"Adaffinity" <${param.body.email}>`,
                subject: 'Welcome to Adaffinity!',
                html: '',
                data: customData
            };
            const emailResult = yield (0, email_1.default)(mailOptions);
            if (emailResult) {
                console.log("Wellcome email sent successfully");
            }
            else {
                console.log("Failed to send wellcome email");
            }
            //return { success: true, message: "Wellcome email sent successfully" };
        }
        catch (error) {
            console.error("Error sending wellcome email:", error);
            //return { success: false, message: "Failed to send wellcome email" };
        }
    });
}
