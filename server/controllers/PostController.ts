import { Post } from '../db/models';
import { BaseCrudController } from './BaseCrudController';

class PostController extends BaseCrudController {
  Model = Post;
}

export const postCtrl = new PostController();
