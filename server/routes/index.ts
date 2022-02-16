import { Request, Response, Router } from 'express';
import { homepage } from './home';
import { router as apiViRouter } from './api/v1';
import path from 'path';
import fs from 'fs';
const { viteDevServer } = require('vite');

const router = Router();

router.use('/api/v1/', apiViRouter);


router.get('*', async (req: Request, res: Response) => {
  // const url = req.originalUrl;
  // let template = fs.readFileSync(path.resolve(__dirname, '..', '..', 'front', 'index.html'), 'utf-8')
  // template = await viteDevServer.transformIndexHtml(url, template);
  // res.send(template);
  // const html = viteServer
  console.log('====>', path.join(__dirname, '..', '..', 'front', 'index.html'));
  return res.sendFile(path.join(__dirname, '..', '..', 'front', 'index.html'), 'utf-8');
});


// router.use('/', homepage);

export default router;
