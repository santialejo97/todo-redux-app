import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtersValid } from 'src/app/filter/filter.actions';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(value: Todo[], filter: filtersValid): Todo[] {
    switch (filter) {
      case 'Activos':
        return value.filter((todo) => todo.status == false);

      case 'completados':
        return value.filter((todo) => todo.status == true);

      default:
        return value;
    }
  }
}
