"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, minlength: 3, maxlength: 16, unique: true },
    password: { type: String, required: true, minlength: 6 },
    email: { type: String, required: true, minlength: 6, maxlength: 128, unique: true },
    createdDate: { type: Date, default: new Date().toISOString() },
    active: { type: Boolean, default: true },
    salt: { type: String, required: true }
});
exports.User = mongoose_1.default.model('User', userSchema);
