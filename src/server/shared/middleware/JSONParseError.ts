/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export const JSONParseError = (err: any, _: any, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'Formato enviado é incorreto'
      }
    });
  } else {
    next();
  }
};
