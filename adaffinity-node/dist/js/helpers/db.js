"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
exports.User = user_model_1.default;
module.exports = { User: user_model_1.default }; // For CommonJS
