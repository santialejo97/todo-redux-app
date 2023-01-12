import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  clearCompleted,
  crear,
  editar,
  toggle,
  toggleAll,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Salvar el mundo2'),
  new Todo('Salvar el mundo3'),
  new Todo('Salvar el mundo4'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }
      return todo;
    });
  }),
  on(editar, (state, { texto, id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      }
      return todo;
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),
  on(toggleAll, (state, { status }) => {
    return state.map((todo) => ({
      ...todo,
      status,
    }));
  }),
  on(clearCompleted, (state) => {
    return state.filter((todo) => !todo.status);
  })
);
