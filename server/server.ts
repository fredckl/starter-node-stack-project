import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';
import morgan from 'morgan';
import indexRouter from './routes/index';
import cors from 'cors';
import path from 'path';
const { createServer: createViteServer } = require('vite');

const distFrontPath = path.resolve(process.cwd(), 'dist', 'front');

export const app = express();
export const init = async () => {
  app.set('x-powered-by', false);

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(distFrontPath));

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  });

  app.use(vite.middlewares);

  app.use('/', indexRouter);

  app.use('*', async (req: Request, res: Response) => {
    res.sendFile(path.join(distFrontPath, 'index.html'));
  });


  app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
  });

  app.use((err: HttpError, req: Request, res: Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
};
