import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3, maxlength: 16, unique: true },
  password: { type: String, required: true, minlength: 6 },
  email: { type: String, required: true, minlength: 6, maxlength: 128, unique: true },
  createdDate: { type: Date, default: new Date().toISOString() },
  active: { type: Boolean, default: true },
  salt: { type: String, required: true }
});

export const User = mongoose.model('User', userSchema);
