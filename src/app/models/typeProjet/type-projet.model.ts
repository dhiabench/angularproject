import {Projet} from '../projet/projet.model';

export class TypeProjet {
  constructor(
    public id: number,
    private type: string,
    private description: string,
  )
  {

  }
}
