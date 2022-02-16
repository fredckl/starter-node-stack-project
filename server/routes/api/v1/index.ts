import {Router} from 'express';
import {postRouter} from './posts';

export const router = Router();

router.use('/posts', postRouter);
