import * as getById from './GetById';
import * as create from './Create';


export const UsuariosProvider = {
  ...getById,
  ...create,
};
