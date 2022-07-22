import * as deleteById from './DeleteById';
import * as updateById from './UpdateById';
import * as getById from './GetById';
import * as create from './Create';
import * as getAll from './GetAll';


export const CidadesController = {
  ...deleteById,
  ...updateById,
  ...getById,
  ...create,
  ...getAll,
};
