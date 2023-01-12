import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{ id: string }>()
);

export const editar = createAction(
  '[TODO] Editar todo',
  props<{ texto: string; id: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar todo',
  props<{ id: string }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll todo',
  props<{ status: boolean }>()
);

export const clearCompleted = createAction('[TODO] Clear todo');
