"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const containerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    createdOn: { type: Date, default: new Date().toISOString() },
    createdBy: { type: String, required: true },
    userId: { type: String, required: true }
});
exports.Container = mongoose_1.default.model('Container', containerSchema);
