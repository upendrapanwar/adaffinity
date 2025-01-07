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
exports.register = void 0;
const auth_service_1 = __importDefault(require("../services/auth.service"));
const messages_json_1 = __importDefault(require("../helpers/messages.json"));
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // Example validation error
        if (!email) {
            const error = new Error('Email is required');
            error.status = 400;
            throw error;
        }
        const result = yield auth_service_1.default.createAccount(req.body);
        if (!result) {
            return res.status(400).json({
                status: false,
                message: 'User already exists or something went wrong',
            });
        }
        res.status(201).json({
            status: true,
            message: messages_json_1.default.user.signup.success,
            data: result.data,
            authData: result.authData,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.register = register;
