import {prop, propEq, propOr} from 'ramda';

export const getEnv = (): any => prop('env', process);

export const isDev = () => propEq('NODE_ENV', 'development', getEnv());
export const isProd = () => propEq('NODE_ENV', 'production', getEnv());

export const getRootDir = (): string => propOr(process.cwd(), 'ROOT_DIR', getEnv());
