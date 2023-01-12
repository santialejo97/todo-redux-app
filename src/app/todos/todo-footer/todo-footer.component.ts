import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import { setFilter, filtersValid } from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [],
})
export class TodoFooterComponent implements OnInit {
  filterActual!: filtersValid;
  filters: filtersValid[] = ['Todos', 'Activos', 'completados'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('filter').subscribe((filter) => {
    //   this.filterActual = filter;
    // });
    this.store.subscribe(({ todos, filter }) => {
      this.filterActual = filter;
      this.pendientes = todos.filter((todo) => todo.status == false).length;
    });
  }

  filterChange(filter: filtersValid) {
    this.store.dispatch(setFilter({ filter: filter }));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
}
