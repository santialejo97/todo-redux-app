import { createAction, props } from '@ngrx/store';

export type filtersValid = 'Todos' | 'completados' | 'Activos';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: filtersValid }>()
);
