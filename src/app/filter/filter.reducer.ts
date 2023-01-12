import { Action, createReducer, on } from '@ngrx/store';
import { filtersValid, setFilter } from '../filter/filter.actions';

export const initialState: filtersValid = 'Todos';

export const filterReducer = createReducer<filtersValid, Action>(
  initialState,
  on(setFilter, (state: filtersValid, { filter }) => filter)
);
