import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  // API: GET /todos
  public getAllTodos() {
    // this.http.get()
  }

  // API: POST /todos
  public createTodo(todo: Todo) {
    // this.thhp.post()
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    // this.http.get()
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {
    // this.http.put()
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // this.http.delete()
  }
}
