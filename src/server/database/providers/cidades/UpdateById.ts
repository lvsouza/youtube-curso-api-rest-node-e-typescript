import { ETableNames } from '../../ETableNames';
import { ICidade } from '../../models';
import { Knex } from '../../knex';


export const updateById = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .update(cidade)
      .where('id', '=', id);

    if (result > 0) return;

    return new Error('Erro ao atualizar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao atualizar o registro');
  }
};
