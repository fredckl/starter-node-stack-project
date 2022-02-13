import {Router} from 'express';
import {homepage} from './home';
import {router as apiViRouter} from './api/v1';

const router = Router();

router.use('/api/v1/', apiViRouter);
router.use('/', homepage);

export default router;
