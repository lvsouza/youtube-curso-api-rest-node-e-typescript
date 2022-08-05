import { ICidade } from '../../models';


declare module 'knex/types/tables' {
  interface Tables {
    pessoa: IPessoa;
    cidade: ICidade;
    // usuario: IUsuario;
  }
}
