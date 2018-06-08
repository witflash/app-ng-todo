import { Injectable } from '@angular/core';
import { Todo } from './todo';
// import { ValidateModule } from './validate/validate.module';
import { ValidateService } from './validate/validate.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor(private api: ApiService) {}

  // Simulate POST /todos
  // addTodo(todo: Todo): TodoDataService {
  //   const Validator = new ValidateService(todo.title);
  //   Validator.init(this.todos);

  //   if (Validator.isValid === false) {
  //     return;
  //   }
  //   if (!todo.id) {
  //     todo.id = ++this.lastId;
  //   }
  //   this.todos.push(todo);
  //   return this;
  // }
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  // deleteTodoById(id: number): TodoDataService {
  //   this.todos = this.todos.filter(todo => todo.id !== id);
  //   return this;
  // }
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  // updateTodoById(id: number, values: Object = {}): Todo {
  //   let todo = this.getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  // getAllTodos(): Todo[] {
  //   return this.todos;
  // }
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  // getTodoById(id: number): Todo {
  //   return this.todos.filter(todo => todo.id === id).pop();
  // }
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle todo complete
  // toggleTodoComplete(todo: Todo) {
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete,
  //   });
  //   return updatedTodo;
  // }
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
