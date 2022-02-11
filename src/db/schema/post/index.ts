import mongoose from 'mongoose';

export interface IPost extends Document {
  title: string
}

export const postSchema = new mongoose.Schema<IPost>({
  title: { type: String, required: true }
}, {
  timestamps: true
});
