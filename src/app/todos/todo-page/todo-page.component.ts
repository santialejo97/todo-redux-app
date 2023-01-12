import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: [],
})
export class TodoPageComponent implements OnInit {
  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  selectAll() {
    this.completado = !this.completado;
    console.log(this.completado);
    this.store.dispatch(toggleAll({ status: this.completado }));
  }
}
