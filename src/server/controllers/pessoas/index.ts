import * as updateById from './UpdateById';
import * as deleteById from './DeleteById';
import * as getById from './GetById';
import * as create from './Create';
import * as getAll from './GetAll';


export const PessoasController = {
  ...updateById,
  ...deleteById,
  ...getById,
  ...getAll,
  ...create,
};
