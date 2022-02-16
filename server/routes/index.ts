import { Router } from 'express';
import { router as apiViRouter } from './api/v1';

const router = Router();

router.use('/api/v1/', apiViRouter);

export default router;
