import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';


interface ICidade {
  nome: string;
  estado: string;
}
const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});
export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};


interface IFilter {
  filter?: string;
}
const queryValidation: yup.SchemaOf<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
});
export const createQueryValidator: RequestHandler = async (req, res, next) => {
  try {
    await queryValidation.validate(req.query, { abortEarly: false });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);


  return res.send('Create!');
};
