import { Router, Request, Response } from 'express';
const router = Router();

/* GET home page. */
export const homepage = (req: Request, res: Response) => {
  return res.json({Sitename: 'Node stack'});
};


