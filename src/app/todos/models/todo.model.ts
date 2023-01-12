import { v4 as uuidv4, v4 } from 'uuid';

export class Todo {
  id: string;
  texto: string;
  status: boolean;

  constructor(texto: string, status: boolean = false) {
    this.id = v4();
    this.texto = texto;
    this.status = status;
  }
}
