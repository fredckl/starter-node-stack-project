import mongoose from 'mongoose';
import { logger } from '../../lib/logger';
import { postSchema } from './post';

main().catch(err => logger.error(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/node-starter');
}

export const PostSchema = mongoose.model('Post', postSchema);
