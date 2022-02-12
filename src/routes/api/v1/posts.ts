import { Router } from 'express';
import { postCtrl } from '../../../controllers/PostController';
import { HttpHandler } from '../../../http/HttpHandler';

export const postRouter = Router();

postRouter.get('/', HttpHandler.json(postCtrl.getAll));
postRouter.get('/:id', HttpHandler.json(postCtrl.getById));
postRouter.post('/', HttpHandler.json(postCtrl.create));
postRouter.put('/:id', HttpHandler.json(postCtrl.update));
postRouter.delete('/:id', HttpHandler.json(postCtrl.remove));
