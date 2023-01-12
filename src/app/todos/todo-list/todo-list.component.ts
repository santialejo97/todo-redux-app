import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtersValid } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filter!: filtersValid;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filter }) => {
      this.todos = todos;
      this.filter = filter;
    });
  }
}
