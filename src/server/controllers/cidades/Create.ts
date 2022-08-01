import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { ICidade } from '../../database/models';


interface IBodyProps extends Omit<ICidade, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

  return res.status(StatusCodes.CREATED).json(1);
};
