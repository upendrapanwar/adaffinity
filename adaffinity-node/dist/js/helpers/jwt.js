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
exports.default = jwt;
const express_jwt_1 = require("express-jwt");
const auth_service_1 = __importDefault(require("../services/auth.service")); // Assuming this service exists and is typed
function jwt() {
    const secret = process.env.SECRET;
    if (!secret) {
        throw new Error('JWT secret is not defined in environment variables.');
    }
    return (0, express_jwt_1.expressjwt)({
        secret,
        isRevoked,
        algorithms: ['HS256'],
    }).unless({
        path: [
            '/auth/signin', // Define paths that don't require authentication
        ],
    });
}
// Function to check if the token should be revoked
function isRevoked(req, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = req.originalUrl;
            // Check if the URL includes 'auth/' for specific logic
            if (url.includes('auth/')) {
                const params = { id: payload.id, role: ['advertisor', 'creator'] };
                // Fetch the user by ID
                const user = yield auth_service_1.default.getUserById(params.id);
                // Validate the user's existence and role
                if (!user || !params.role.includes(user.role)) {
                    return true; // Revoke the token
                }
            }
            return false; // Token is valid
        }
        catch (error) {
            console.error('Error checking token revocation:', error);
            return true; // Assume token should be revoked on error
        }
    });
}
