import cookieParser from 'cookie-parser';
import express, {NextFunction, Request, Response} from 'express';
import createError, {HttpError} from 'http-errors';
import morgan from 'morgan';
import indexRouter from './routes/index';
import cors from 'cors';

export const app = express();
export const init = () => {
	app.set('x-powered-by', false);

	app.use(cors());
	app.use(morgan('dev'));
	app.use(express.json());
	app.use(express.urlencoded({extended: false}));
	app.use(cookieParser());

	app.use('/', indexRouter);


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
