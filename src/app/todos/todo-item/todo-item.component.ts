import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { borrar, editar, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo!: Todo;
  chkCompletado!: FormControl;
  txtInput!: FormControl;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.status);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid || this.todo.texto === this.txtInput.value) {
      return;
    }

    this.store.dispatch(
      editar({ texto: this.txtInput.value, id: this.todo.id })
    );
  }

  borrar() {
    this.store.dispatch(borrar({ id: this.todo.id }));
  }
}
