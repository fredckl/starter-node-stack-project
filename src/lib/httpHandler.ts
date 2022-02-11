import { Request, Response } from "express";

import { OK } from './OK';
import { KO } from './KO';
import { logger } from "./logger";

export const httpHandler = (cb: any) => async (req: Request, res: Response) => {
  try {
    const response = await cb(req);
    res.json((new OK(response).render()));
  } catch (err: any) {
    const msg = JSON.stringify(err.message || err);
    logger.error(`[HTTP HANDLER] error : ${msg}`)
    res.json((new KO(msg)).render());
  }
};
