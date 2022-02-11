import { Request } from 'express';

export type stringOrNullType = string | null;

export type actionFunction = (req: Request) => Promise<any> | any