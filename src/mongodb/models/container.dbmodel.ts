import mongoose from 'mongoose';

const containerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdOn: { type: Date, default: new Date().toISOString() },
  createdBy: { type: String, required: true },
  userId: { type: String, required: true }
});

export const Container = mongoose.model('Container', containerSchema);
