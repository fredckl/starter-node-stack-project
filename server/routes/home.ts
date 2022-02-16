import { Request, Response } from 'express';

/* GET home page. */
export const homepage = (req: Request, res: Response) => {
  return res.json({ Sitename: 'Node stack' });
};


