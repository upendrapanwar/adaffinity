"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const userSchema = new mongoose_1.Schema({
    first_name: { type: String, required: false, default: '' },
    last_name: { type: String, required: false, default: '' },
    fb_loginId: { type: String, required: false, default: '' },
    google_loginId: { type: String, required: false, default: '' },
    email: { type: String, unique: true, required: false, index: true, default: '' },
    phone: { type: String, required: false, default: '' },
    role: { type: String, required: false, default: 'creator' },
    address: { type: String, required: false, default: '' },
    city: { type: String, required: false, default: '' },
    county: { type: String, required: false, default: '' },
    country: { type: String, required: false, default: '' },
    postcode: { type: String, required: false, default: '' },
    isActive: { type: Boolean, required: false, default: true },
    password: { type: String, required: false, default: '' },
    reset_password: {
        verif_code: { type: String, required: false, default: null },
        code_valid_at: { type: Date, required: false, default: null },
        is_pass_req: { type: Boolean, required: false, default: false },
    },
    createdAt: { type: Date, required: false, default: Date.now },
    updatedAt: { type: Date, required: false, default: Date.now },
    __v: { type: Number, required: false, default: '' }
}, {
    timestamps: true
});
userSchema.set('toJSON', { virtuals: true, versionKey: false });
userSchema.plugin(mongoose_paginate_v2_1.default);
exports.default = mongoose_1.default.model('User', userSchema);
