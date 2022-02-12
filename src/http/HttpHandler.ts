import { Request, Response } from 'express';
import { logger } from '../lib/logger';
import { actionFunction } from '../simpleTypes';
import { JsonResponse } from './JsonResponse';

export class HttpHandler {
  public static json = (callback: actionFunction) => async (req: Request, res: Response) => {
    try {
      const result = await callback(req);
      res.json({
        ok: true,
        data: JsonResponse.formatData(result)
      })
    } catch (err: any) {
      const msg = JSON.stringify(err.message || err);
      logger.error(`[HTTP HANDLER] error : ${msg}`)
      res.json({
        ok: false,
        error: msg
      })
    }
  }

  public static graphql = (callback: actionFunction) => async (...rest: any) => {
    try {
      // @ts-ignore
      const result = await callback(...rest);
      return {
        ok: true,
        data: result
      }
    } catch (err: any) {
      const msg = JSON.stringify(err.message || err);
      logger.error(`[HTTP HANDLER] error : ${msg}`)
      return {
        ok: false,
        error: msg
      }
    }
  }
}