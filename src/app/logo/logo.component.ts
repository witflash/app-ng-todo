import { Component, Input } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  constructor(private data: TodoDataService) { }

  getAllTodos(): string {
    return this.data.todos.length ? this.data.todos.length.toString() : '';
  }

  getLabel(): string {
    const count = this.getAllTodos();
    if(count) {
      return this.getAllTodos() === '1' ? 'item' : 'items'
    } else {
      return '';
    }
  }
}
